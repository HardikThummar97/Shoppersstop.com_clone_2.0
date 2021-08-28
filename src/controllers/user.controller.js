const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

// router.get("/:id", async (req, res) => {
//   const user = await User.findById(req.params.id).lean().exec();
//   res.send(user);
// });

router.get("/", async (req, res) => {
  const users = await User.find().lean().exec();
  res.send(users);
});

router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  res.send({ Added: user });
});

module.exports = router;
