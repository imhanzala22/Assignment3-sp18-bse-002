  
var mongoose = require("mongoose");

var MyBooksSchema = mongoose.Schema({
  name: String,
  price: String,
});
const MyBooks = mongoose.model("MyBooks", MyBooksSchema);
module.exports = MyBooks;