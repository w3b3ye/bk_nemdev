/** Clean-blog main index file. */

var express = require("express");
var ejs = require("ejs");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var fileupload = require("express-fileupload");

//Controllers
var newpostctrl = require('./controllers/newpost');
var aboutctrl = require('./controllers/about');
var contactctrl = require('./controllers/contact');
var searchctrl = require('./controllers/search');
var nofoundctrl = require('./controllers/nofound');
var homectrl = require('./controllers/home');
var storepostctrl = require('./controllers/storepost');
var getpostctrl = require('./controllers/getpost');

mongoose.connect("mongodb://localhost:27017/db_cblog", { useNewUrlParser: true });
var app = express();


var validatemiddleware = (req, res, next) => {
  if (!req.files || !req.files.image || !req.body.title) {
    return res.redirect('/post/new')
  }
  next()
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());
app.use('/post/store', validatemiddleware);

app.use(express.static("public"));
app.set("view engine", "ejs");


app.listen(4000, function () {
  console.log("App is listening on port 4000.");
});

app.get("/", homectrl);
app.get("/post/new", newpostctrl);
app.get("/about", aboutctrl);
app.get("/contact", contactctrl);
app.get("/post/:id", getpostctrl);

app.post("/post/search", searchctrl);
app.post("/post/store", storepostctrl);

app.use(nofoundctrl);

/* app.post("/post/store", async (req, res) => {
  let image = req.files.image;
  image.mv(path.resolve(__dirname, "public/img", image.name), async (error) => {
    await blogpost.create({ ...req.body, image: '/img/' + image.name });
    res.redirect("/");
  });
}); */

