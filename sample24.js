const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,function(){
    console.log("server is running on port 3000");
});

app.get("/",function(req,res){
    res.sendFile(__dirname+"/sample15.html");
});

app.post("/",function(req,res){
   console.log("Text written",req.body.textField);
   console.log("Hidden input = ",req.body.hiddenIP);
});