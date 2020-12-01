  
var mongoose = require("mongoose");

var BookSchema = mongoose.Schema({
  name: String,
  price: String,
});
const Book = mongoose.model("Books", BookSchema);
module.exports = Book;