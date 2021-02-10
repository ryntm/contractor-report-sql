// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
require('dotenv').config();

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routesUpwork = require('./controllers/data-controller-upwork')
let routesGigDataAdmin = require('./controllers/data-controller-gig-data-admin')
let routesGigDataOutreach = require('./controllers/data-controller-gig-data-outreach')

app.use(routesUpwork)
app.use(routesGigDataAdmin)
app.use(routesGigDataOutreach)


app.listen(PORT, function() {
  console.log(
  "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
  PORT,
  PORT
    );
  })
