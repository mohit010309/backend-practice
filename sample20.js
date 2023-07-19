const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000,function(){
    console.log("Server running on port 3000");
});

app.get("/",function(req,res){
    res.sendFile(__dirname+"/sample11.html");
});

app.post("/",function(req,res){
    console.log(req.body);
    console.log(req.body.heading);
    //console.log(req.body.heading);
});