/** Clean-blog main index file. */

var path = require("path");
var express = require("express");
var ejs = require("ejs");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db_cblog", { useNewUrlParser: true });
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(4000, function () {
  console.log("App is listening on port 4000.");
});


app.get("/", function (req, res) {
  //Sending home page.
  //res.sendFile(path.resolve(__dirname, "pages/index.html"));
  res.render("index");
});

app.get("/contact", function (req, res) {
  //Sending a html page for contact.
  //res.sendFile(path.resolve(__dirname, "pages/contact.html"));
  res.render("contact");
});

app.get("/about", function (req, res) {
  //Sending a html page for about.
  //res.sendFile(path.resolve(__dirname, "pages/about.html"));
  res.render("about");
});

app.get("/post", function (req, res) {
  //Sending a html page for about.
  //res.sendFile(path.resolve(__dirname, "pages/post.html"));
  res.render("post");
});


app.use((req, res) => {
  //res.status(404).sendFile(path.resolve(__dirname, "pages/nofound.html"));
  res.status(404).render("nofound");
});

