const express = require("express");
const router = express.Router();

const Home = require("../models/home.model");

router.get("/", async (req, res) => {
  res.render("home.ejs");
});

router.get("/productList", async (req, res) => {
  res.render("productList.ejs");
});

router.get("/productDesc", async (req, res) => {
  res.render("productDesc.ejs");
});

router.get("/cart", async (req, res) => {
  res.render("cart.ejs");
});

router.get("/checkout", async (req, res) => {
  res.render("checkout.ejs");
});

router.get("/thanks", async (req, res) => {
  res.render("thanks.ejs");
});

module.exports = router;
