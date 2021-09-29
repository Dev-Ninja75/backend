var express = require("express");
var exphbs = require("express-handlebars");
var app = express();

app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");

app.listen(3000); // openin server
