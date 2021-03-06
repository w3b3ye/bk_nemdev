/** Basic example, showing use of express package */

var path = require("path");
var express = require("express");
var app = express();

app.use(express.static("public"));

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
  //Sending home page.
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/contact", function (req, res) {
  //Sending a html page for contact.
  res.sendFile(path.resolve(__dirname, "contact.html"));
});

app.get("/about", function (req, res) {
  //Sending a html page for about.
  res.sendFile(path.resolve(__dirname, "about.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, "nofound.html"));
});
