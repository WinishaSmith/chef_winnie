var express = require("express");
var app     = express();

app.use("/", express.static("public"));
// app.use("/js", express.static(__dirname + "/public/js"));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/public/index.html");
});


app.listen(3003, function(){
  console.log("Houston we have lift off!");
});
