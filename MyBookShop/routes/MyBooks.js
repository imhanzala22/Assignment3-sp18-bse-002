var express = require('express');
var router = express.Router();
var Book = require("../Model/Book");

/* GET home page. */

router.get("/",async function(req,res,next){
  let book= await Book.find();
 // console.log(book);
  res.render("MyBook/list",{title:"Books in List",MyBooks:book});
});
router.get("/MyBook/add",async function(req,res,next){
  res.render("MyBook/add");
 });
// router.post("/add", async function (req, res, next) {
//   let book = new Book(req.body);
//   await book.save();
//   res.redirect("/MyBook");
// });

// router.get("/delete/:id", async function (req, res, next) {
//   let book = await Books.findByIdAndDelete(req.params.id);
//   res.redirect("/MyBook");
// });
// module.exports = router;
