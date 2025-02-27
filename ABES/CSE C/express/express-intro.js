// const express = require('express'); old way

// new way
import express from 'express'
const app = express();
const port = 3000;

app.get("/",(req,res) => {
    res.send("welocme to cse-c");
});

app.get("/about",(req,res)=>{
    res.send("welocme to about page");
});


app.get("/api/:name/:rollno",(req,res)=>{
    try{
        const data = req.params;
        res.send(`welcome ${data.name} and your roll no. is ${data.rollno}`);
    }
    catch(error){
        console.log("Error" ,error.message);
        
    }
})

// http://localhost:3000/api?name=rahul&rollno=121
app.get("/api",(req,res) => {
    // const {name ="guest",rollno = 100} = req.query;
    // const {name,rollno} = req.query;
    // res.send(`welcome ${name} and your roll no. is ${rollno}`);
    try{
        // const {name,rollno} = req.query;
        // res.send(`welcome ${name} and your roll no. is ${rollno}`);
        const {name,rollno} = req.query;
        if(!name){
            res.send({status:404,message: "please enter a name"});
            // res.status(404).send("please enter a name")
        }
        else{
            res.send(`welcome ${name} and your roll no. is ${rollno}`);
        }
    }
    catch(error){
        console.log(error.message);
    }
});

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});
