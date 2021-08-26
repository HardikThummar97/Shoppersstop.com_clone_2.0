const express = require("express");
const router = express.Router();

const Cart = require("../models/cart.model");

// router.get("/:id", async (req, res) => {
//   const cart = await Cart.findById(req.params.id).lean().exec();
//   res.send(cart);
// });

router.get("/:id", async (req, res) => {
  const cartProduct = await Cart.findById(req.params.id).lean().exec();
  return res.json({ product: cartProduct });
});

router.get("/", async (req, res) => {
  const cart = await Cart.find().lean().exec();
  res.json({ cart: cart });
});

router.post("/", async (req, res) => {
  const cartProduct = await Cart.create(req.body);
  res.send({ Added: cartProduct });
});

router.patch("/:id", async (req, res) => {
  const cartProduct = await Cart.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send({ updated: cartProduct });
});

router.delete("/:id", async (req, res) => {
  const cartProduct = await Cart.findByIdAndDelete(req.params.id);
  res.send({ Deleted: cartProduct });
});

module.exports = router;
