const express = require("express");
const app = express();
const cors =require("cors");
const routes = require("./config/routes"); 


app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors());


app.use(routes);



const port = process.env.PORT || 4200;
app.listen(port, ()=>{
    console.log("server running");
})

// this page for Main file