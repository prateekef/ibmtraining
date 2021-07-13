var express=require('express');
var app=express();

app.get('/',function(req,res){
res.send("<h1 style='color:red;'>Hello Edunet!");
});
console.log("log in using http://localhost:8080");
app.listen(8080);