/** Clean-blog main index file. */

var path = require("path");
var express = require("express");
var app = express();

app.use(express.static("public"));

app.listen(4000, function () {
  console.log("App is listening on port 4000.");
});
