const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set(express.static(path.join(__dirname, "/assets")));

app.get("/", (req, res) => {
  res.render("main");
});

app.listen(PORT, () => {
  console.log(`${PORT} Talk Server Start`);
});
