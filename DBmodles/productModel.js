const mongoose= require("mongoose");
let productSchema = mongoose.Schema({
    name:String,
    price:Number,
    city:String,
    location:String,
    detail:String,
});

let Product= mongoose.model("Products",productSchema);

module.exports= Product;