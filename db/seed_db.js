var mongoose = require("./connection");
var seedData = require("./seeds")
var Recipe  = mongoose.model("Recipe");

Recipe.remove().then(function(){
  Recipe.create(seedData).then(function(){
    process.exit();
  });
});
