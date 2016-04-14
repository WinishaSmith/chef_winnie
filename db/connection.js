var mongoose = require("mongoose");

var RecipeSchema = {
  name: String,
  description: String
}

mongoose.model("Recipe", RecipeSchema);
mongoose.connect("mongodb://localhost/chef_winnie");

module.exports = mongoose;
