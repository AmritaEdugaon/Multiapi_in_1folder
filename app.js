const express=require("express");
const app=express();

app.use(express.json());

// import all apis
const collage = require("./collage");
const doctor = require("./doctor");
const hospital = require("./hospital");
const shop = require("./shop");

//useing api
app.use("/collage",collage);
app.use("/doctor",doctor);
app.use("/hospital",hospital);
app.use("/shop",shop);


app.listen(5000,()=>{
    console.log("my server is runing on http://localhost:5000");
})