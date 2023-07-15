const express=require('express');
const app=express();
app.listen(3000,function(){
    console.log("Server started on port 3000");
});

app.get("/",function(req,res){
    res.sendFile(__dirname+"/sample5.html");
    console.log("Inside the app.get method");
});

app.post("/",function(req,res){
    res.send("You have posted");
    console.log("inside the app.post method");
});