var mongoose = require("mongoose");

var BooksSchema = mongoose.Schema({
  name: String,
  price: String,
});
const Books = mongoose.model("Books", BooksSchema);
module.exports = Books;