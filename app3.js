const express=require('express');
const app=express();

app.listen(3000,function(){
    console.log("Server has started on port 3000");
});
// app.use("/",function(req,res,next){
//     console.log("This is called everytime");
//     // next();
// });
app.get("/",function(req,res){
    console.log("This is app.get");
    res.send("This is app.get method");
});

