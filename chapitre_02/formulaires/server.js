var express = require("express");
var exphbs = require("express-handlebars");
var app = express();

app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("home");
});

app.post("/login", function (req, res) {
  console.log("username", req.body.username);
  console.log("password", req.body.password);
  res.redirect("redirect");
});

app.get("/redirect", function (req, res) {
  res.render("redirect");
});

app.listen(3000);
