var express = require('express');
var router = express.Router();
var Book = require("../Model/Book");

/* GET home page. */
//router.get('/', async function(req, res, next) {
  //let Book= await Book.find();
//  console.log(Books);
 // res.render('MyBooks/list' , { title : "Books in database", Books } );
//});
router.get("/",async function(req,res,next){
  let book= await Book.find();
 // console.log(book);
  res.render("MyBook/list",{title:"Books in List",MyBooks:book});
})

module.exports = router;
