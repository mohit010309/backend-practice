const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});

app.get("/",function(req,res){
    res.sendFile(__dirname+"/sample3.html");
});

app.post("/",function(req,res){
    console.log(req.body.someText);
    res.send("Thanks for posting...");
});
app.use(bodyParser.urlencoded({extended:true}));
