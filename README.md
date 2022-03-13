To run the application, first go into the backend-folder. Then run: "node index.js". After that, you need to go into the frontend-folder, and run "npm run serve". After that, the website should be visitable on http://localhost:8080/review-notes.


So, for the project, i managed to do most if it, except the colors of the v-chip and the pictures of the reporter and assignes. Either way, when implementing the website, i used mostly vuetify as help, and occationally stack overflow. I have tried to spllit as much functionality into components. 

When it comes to the filters, i only implemented for the type, priority, date and reporter. When any of those ae changed, it will call the backend, and rerender the list of notes.