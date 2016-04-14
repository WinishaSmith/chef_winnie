var express = require("express");
var hbs = require("express-handlebars");
var mongoose = require("./db/connection");
var app     = express();

var Recipe = mongoose.model("Recipe");

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:      ".hbs",
  partialsDir:  "views/",
  layoutsDir:   "views/",
  defaultLayout: "layout-main"
}));
app.get("/", function(req,res){
  // Recipe.find().then(function(){
  //   res.json(response);
  // });

  res.render("recipes-index");
});


app.listen(3003, function(){
  console.log("Houston we have lift off!");
});
