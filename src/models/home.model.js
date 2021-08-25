const mongoose = require("mongoose");

//Schema;
const homeSchema = new mongoose.Schema({});

//model;
const Home = mongoose.model("home", homeSchema);

module.exports = Home;
