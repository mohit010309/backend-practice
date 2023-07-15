const express=require('express');
const app=express();



app.listen(3000,function(){
    console.log("Server is running on port 3000");
});

app.get("/",function(req,res){
    res.sendFile(__dirname+"/sample2.html");
});
app.get("/public2/css/css2.css",function(req,res){
    res.sendFile(__dirname+"/public2/css/css2.css");
});
// app.get("/css/css2.css",function(req,res){
//     res.sendFile(__dirname+"/public/css/css2.css");
// });
// app.use(express.static("public2"));
// app.use(express.static("public"));
