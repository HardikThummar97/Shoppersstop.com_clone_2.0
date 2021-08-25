//Import express & path;
const path = require("path");
const express = require("express");
const app = express();
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "public")));
//Import connection;
const connect = require("./configs/db");

//Import routers;
const homeController = require("./controllers/home.controller");
app.use("/home", homeController);

//Start connection;
app.listen(3000, async () => {
  await connect();
  console.log("Listening on port 3000");
});
