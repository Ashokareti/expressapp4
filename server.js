var express =require('express')
var app=express();
var tiffins=require("./tiffins.json")    
var bodyparser=require('body-parser')
var cors=require('cors')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(cors())

app.get("/",(req,res)=>
{
    console.log(req.params);
    console.log(req.query);
    res.send(req.query);  
})
// app.get("/student",(req,res)=>
// {
//     console.log(req.params);
//     console.log(req.query);
//     res.send(req.query);  
// })
app.post("/student",(req,res)=>
{
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    
    res.send(req.body);  
})
app.get("/getAllTiffins",(req,res)=>{
    res.send(tiffins)
})
app.listen(3300,()=>{
    console.log("server is running 3300")
})