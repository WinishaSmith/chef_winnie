var express = require("express");
var hbs = require("express-handlebars");
var parser    = require("body-parser");
var mongoose = require("./db/connection");
var app     = express();

var Recipe = mongoose.model("Recipe");

app.use(parser.urlencoded({extended: true}));
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:      ".hbs",
  partialsDir:  "views/",
  layoutsDir:   "views/",
  defaultLayout: "layout-main"
}));

app.get("/", function(req,res){
  Recipe.find().then(function(response){
    res.render("recipes-index", {
      recipes: response
    });
  });
});

app.get("/:name", function(req, res){
  Recipe.findOne(req.params).then(function(response){
    res.render("recipes-show", {
      recipe: response
    });
  });
});

app.post("/:name", function(req, res){
  Recipe.findOneAndUpdate(req.params, req.body.recipe, {new: true}).then(function(response){
    res.redirect("/" + response.name);
  });
});


app.listen(3003, function(){
  console.log("Houston we have lift off!");
});
