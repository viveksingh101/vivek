const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.listen(3000);
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res))
 {
  res.sendFile(__dirname+"/index.html");
  
 }
 app.post("/", function(req, res))
 {
     var n1 = Number(req.body.num1);
     var n2 = Number(req.body.num2);
     var result = n1*n2;
     res.send("final answer:-" + result);
    console.log("req.body");
     res.send("thanx for posting the from");
 }
app.listen(3000, function() {
  console.log(" i am vivek kumar singh , email id--------  vs0826534@gmail.com   ");
}