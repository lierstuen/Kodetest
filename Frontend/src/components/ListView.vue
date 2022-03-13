<template>
    <div>
  <v-simple-table class = "tablecustome">
    <template v-slot:default>
      <tbody>
          <tr
          v-for="item in items"
          :key="item"
        >
          <td><v-checkbox></v-checkbox></td>
          <td><div class = "tddefaults">{{ item.title }}</div></td>
          <td><v-chip>{{item.type}}</v-chip></td>
          <td><v-chip>{{item.status}}</v-chip></td>
          <td><v-chip>{{item.priority.text}}</v-chip></td>
          <td><div class = "tddefaults">{{format_date(item.dueDate)}}</div></td>
          <td>{{item.assignies}}</td>
          <td><v-chip>{{item.sectionRef}}</v-chip></td>
          <td><div class = "tddefaults">{{ format_date(item.createdAt["$date"])}}</div></td>
          <td><div class = "tddefaults">{{ format_date(item.updatedAt["$date"])}}</div></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>
</template>

<script>
import axios from "axios";
import moment from 'moment';

export default {
    name: "ListView",
    props:{
        type: "",
        quicksearch: "",
        priority: "",
        reporter: "",
        assignees: "",
        section: "",
        date: "",
    },
    data(){
        return {
            items:[]
        }
    },
    watch:{
        type(){
            this.fetchData();
        },
        quicksearch(){
            this.fetchData();
        },
        priority(){
            this.fetchData();
        },
        reporter(){
            this.fetchData();
        },
        assignees(){
            this.fetchData();
        },
        section(){
            this.fetchData();
        },
        date(){
            this.fetchData();
        },

    },
    computed:{
        
    },
    methods:{
        fetchData: function(){
            console.log(this.type)
            axios.post('http://127.0.0.1:8000/notes',
                {
                    type: this.type,
                    priority: this.priority,
                    reporter: this.reporter,
                    date: this.date
                }
            ).then(response=>{
                this.items = response.data
                console.log(response)
            })

        },
        format_date(value){
         if (value) {
           return moment(String(value)).format('DD.MM.YYYY hh:mm')
          }
      },
    },
    created(){
        this.fetchData();
    },
    typeColor: function(type){
            if(type == "Note"){
                return "grey"
            }
            else{
                return "black"
            }
        }
}
</script>

<style scoped>

.tddefaults{
    font-size: 1.2em;
    font-weight: 600;
}

.tablecustome{
    border-collapse:collapse;
}

tbody, tr, td {
    border: none;
}

tr:hover {
    background-color: transparent !important;
}
td{
    border-bottom: none !important;
}
</style>