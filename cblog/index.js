/** Clean-blog main index file. */

var path = require("path");
var express = require("express");
var app = express();

app.use(express.static("public"));

app.listen(4000, function () {
  console.log("App is listening on port 4000.");
});


app.get("/", function (req, res) {
  //Sending home page.
  res.sendFile(path.resolve(__dirname, "pages/index.html"));
});

app.get("/contact", function (req, res) {
  //Sending a html page for contact.
  res.sendFile(path.resolve(__dirname, "pages/contact.html"));
});

app.get("/about", function (req, res) {
  //Sending a html page for about.
  res.sendFile(path.resolve(__dirname, "pages/about.html"));
});

app.get("/post", function (req, res) {
  //Sending a html page for about.
  res.sendFile(path.resolve(__dirname, "pages/post.html"));
});


app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, "pages/nofound.html"));
});

