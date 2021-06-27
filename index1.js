/** Basic example, showing use of express package */

var path = require("path");
var express = require("express");
var app = express();

app.listen(3000, function () {
  console.log("App is listening on port 3000.");
});

app.get("/json", function (req, res) {
  //Sending json response.
  res.json({
    name: "A Student",
  });
});

app.get("/", function (req, res) {
  //Sending a html page for home.
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/contact", function (req, res) {
  //Sending a html page for home.
  res.sendFile(path.resolve(__dirname, "contact.html"));
});

app.get("/about", function (req, res) {
  //Sending a html page for home.
  res.sendFile(path.resolve(__dirname, "about.html"));
});
