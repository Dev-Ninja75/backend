// init project Localization
var express = require("express");
var exphbs = require("express-handlebars");
var app = express();

app.use(express.static("public"));
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

var translations = require("./translations.json");

// route "fr" // get end point route for homelng page
app.get("/", function (req, res) {
  res.redirect("/fr");
});

// route "lang" // get end point route for homelng translat
app.get("/:lang?", function translat(req, res) {
  var lang = req.params.lang;
  var translat = translations[lang];
  if (!translat) res.render("homelng", translations["fr"]);
  res.render("homelng", translat);
});

// app.post("/fr", function (req, res) {
//   res.redirect("homelng");
// });

// openin server
app.listen(3000);
