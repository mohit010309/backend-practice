const express=require('express');
const app=express();
app.listen(3000,function(){
    console.log("Server is running on port 3000");
});
app.get("/",function(req,res){
    console.log("Inside get app");
    
    res.send("Hello world");
    res.redirect("/");
});