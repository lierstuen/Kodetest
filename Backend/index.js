const express = require("express");
var cors = require('cors')
const app = express();
const PORT = 8000;

var corsOptions = {
    origin: '*',
}

const fs = require('fs');
let rawusers = fs.readFileSync("dummy-data-users.json")
let rawnotes = fs.readFileSync("dummy-data-reviewnotes.json")
app.use(express.json())
app.use(cors())
app.listen(PORT,()=>console.log("listining on port 8000") )

app.post('/notes',cors(corsOptions), (req, res) => {
    const{type, priority, reporter, date} = req.body;
    let data = JSON.parse(rawnotes);

    if(priority != undefined && priority != "" && priority.toLowerCase() != "all"){
        data = data.filter(x=> x["priority"]["text"].toLowerCase() == priority.toLowerCase() )
    }
    if(type != undefined && type != "" && type.toLowerCase() != "all"){
        data = data.filter(x=> x["type"].toLowerCase().includes(type.toLowerCase()))
    }
    if(date != undefined && date != ""){
        data = data.filter(x=> x["dueDate"] == date)
    }
    if(reporter != undefined && reporter != ""){
        var reporterId = GetUserId(reporter);
        data = data.filter(x=> x["reporterId"]["$oid"] == reporterId)
    }
    res.send(data);
});

app.get('/user/:id', cors(corsOptions), (req,res)=>{
    const {id} = req.params;

    let data = JSON.parse(rawusers);
    res.send( data.filter(x=> x["id"]==id));
})

function GetUserId(name){
    let users = JSON.parse(rawusers)
    var user = users.find(x=>x["name"]==name)
    if(user != undefined){
        return user["id"]
    }
    return 0;
}
