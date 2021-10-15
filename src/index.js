const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

//Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));

//HTTP logger
app.use(morgan("combined"));

//trang-chu
app.get("/", (req, res) => {
  res.render("home");
});

//trang-news
app.get("/news", (req, res) => {
  res.render("news");
});

//trang-helloworld
app.get("/helloworld", (req, res) => {
  res.render("helloworld");
});

//test
app.get("/test", (req, res) => {
  res.render("test");
});

//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
