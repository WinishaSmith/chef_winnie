var express = require("express");
var app     = express();

app.get("/", function(req,res){
  res.send("Hey there!");
});

app.listen(3003, function(){
  console.log("Houston we have lift off!");
});
