/** Clean-blog main index file. */

var path = require("path");
var express = require("express");
var ejs = require("ejs");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var blogpost = require("./models/blogpost.js");


mongoose.connect("mongodb://localhost:27017/db_cblog", { useNewUrlParser: true });
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(4000, function () {
  console.log("App is listening on port 4000.");
});


// app.get("/", function (req, res) {
//   //Sending home page.
//   //res.sendFile(path.resolve(__dirname, "pages/index.html"));
//   res.render("index");
// });

app.get("/", async (req, res) => {
  var blogposts = await blogpost.find({});
  //console.log(blogposts);
  res.render("index", {
    blogposts: blogposts
  });
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

app.get("/post/new", function (req, res) {
  //Sending a html page for about.
  //res.sendFile(path.resolve(__dirname, "pages/post.html"));
  res.render("create");
});

// app.post("/post/store", function (req, res) {
//   //console.log(req.body);
//   blogpost.create(req.body,function (error,blogpost){
//     res.redirect("/");
//   });

// });

app.post("/post/store", async (req, res) => {
  await blogpost.create(req.body);
  res.redirect("/");
});

//Normal search code
// app.post("/post/search", async (req, res) => {

//   var text = req.body.txt;
//   var blogposts = await blogpost.find({
//     $or: [{ title: text }, { body: text }]
//   }/* , (error, blogpost) => {
//     console.log(error, blogpost);
//   } */);
//   res.render("index", {
//     blogposts: blogposts
//   });
// });


//Full text search code
app.post("/post/search", async (req, res) => {

  var term = req.body.txt;
  const query = { $text: { $search: term } };

  var blogposts = await blogpost.find(query);
  console.log(blogposts);
  if (blogposts != "") {
    res.render("index", {
      blogposts: blogposts
    });
  }
  else {
    res.status(404).render("nofound");
  }
});

app.use((req, res) => {
  //res.status(404).sendFile(path.resolve(__dirname, "pages/nofound.html"));
  res.status(404).render("nofound");
});

