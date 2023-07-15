const express=require('express');
const app=express();

app.get("/",function(req,res){
    res.send("This is the home route");
});
app.get("/home/:route-:Name",function(req,res){
    console.log(req.params.route,req.params.Name);
    console.log(req.params);
    res.send("This is page of "+req.params.route+" "+req.params.Name);
});
app.get("/:routeName",function(req,res){
    var name = req.params.routeName;
    console.log(name);
    res.send("This is the "+name+" page");
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});