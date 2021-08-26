const mongoose = require("mongoose");

//Schema;
const productSchema = new mongoose.Schema(
  {
    name: String,
    img_1: String,
    img_2: String,
    img_3: String,
    img_4: String,
    img_5: String,
    img_6: String,
    detail: String,
    detail_1: String,
    price_detail: String,
    price: Number,
  },
  { versionKey: false }
);

//model;
const Product = mongoose.model("product", productSchema);

module.exports = Product;
