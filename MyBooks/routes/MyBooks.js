var express = require('express');
var router = express.Router();
var Books = require("../Model/Books");

/* GET home page. */
router.get('/', async function(req, res, next) {
  let MyBooks= await Books.find();
//  console.log(Books);
  res.render('MyBooks/list' , { title : "Books in database", Books } );
});

module.exports = router;
