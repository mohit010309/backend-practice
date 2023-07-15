const express=require('express');
const https=require('https');
const app=express();

const query = "delhi";
const apikey = "5c8ff8e76fa95969baabcfc8f1d42c02";
const units =  "metric";
const url='https://api.openweathermap.org/data/2.5/weather?appid='+apikey+'&q='+query+'&units='+units;
// https.get(url,function(response){
// // response.on("data",function(chunk){
// //     var ob=JSON.parse(chunk);
    
// //     const icon=ob.weather[0].icon;

// //     const imgurl = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
    
// //     res.write("<h1>The temperature in "+query+" is : "+ob.main.temp+" degree celcius</h1>");
// //     res.write("<p>The weather in "+query+" is : "+ob.weather[0].description+"</p>");
// //     res.write("<img src='"+imgurl+"' alt='This is image'/>");
// //     res.send();
// // });
// console.log(response);

// response.on("data",function(chunk){
//     console.log(JSON.parse(chunk.toString()));
// });
// });
options ={
    method:'GET'
};
const htreq = https.request(url,options,function(response){
    response.on('data',function(chunk){
        console.log(JSON.parse(chunk));
    });
});

htreq.on('error',function(error){
    console.log("The error is : "+error);
});

// htreq.end();