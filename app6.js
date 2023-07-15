const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

/* Using body-parser */
app.listen(3000,function(){
    console.log("Server has started on port 3000");
});

app.get("/",function(req,res){
    console.log("Inside the app.get method....");
    console.log("req.body = "+req.body);
    res.sendFile(__dirname+"/sample4.html");
});


app.post("/",function(req,res){
    console.log(req.body);

    //printing the data on req
    // var data="";
    // req.on("data",function(chunk){
    //     data=data+chunk;
    // });
    // req.
    // console.log(req.rawBody);
});
