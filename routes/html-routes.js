// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Adding models do that I can write queries for it.
const db = require("../models/")

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/upwork-data/", (req, res) => {
    let d = new Date();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    console.log(month, year)
    db.UpworkData.findAll()
    .then(upworkData => res.render("upworkdata", {upworkData: upworkData}))

  });

  // app.get("/api/upwork-data", function(req, res) {
  //   db.UpworkData.findAll().then(upworkData => {
  //     res.json(upworkData);
  //   });
  // });

};
