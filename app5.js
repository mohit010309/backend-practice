/* demonstrating importance of path in app.use */

const express=require('express');
const app=express();


app.use("/about",middle1);

app.get("/",function(req,res){
    console.log("This is app.get");
    res.send("You are on home page");
});

app.get("/about",function(req,res){
    console.log("This is about page");
    res.send("This is about page....");
});


app.listen(3000,function(){
    console.log("Server is started on port 3000");
});

function middle1(req,res,next){
    console.log("This is middleware function");
    next();
}