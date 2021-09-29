var express = require("express");
var exphbs = require("express-handlebars");
var app = express();

app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  // get end point route for home page
  res.render("home");
});

app.post("/login", function (req, res) {
  console.log("username", req.body.username);
  console.log("password", req.body.password);
  res.redirect("redirect"); //post redirect after login at redirect page
});

app.get("/redirect", function (req, res) {
  res.render("redirect"); // redirect page end point
});

app.listen(3000);
