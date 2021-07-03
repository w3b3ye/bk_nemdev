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
var newuserctrl = require('./controllers/newuser');

//middlewares
var validatemiddleware = require('./middleware/validationmiddleware.js');

//Database
mongoose.connect("mongodb://localhost:27017/db_cblog", { useNewUrlParser: true });

//Create an app
var app = express();

//Misc
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(4000, function () {
  console.log("App is listening on port 4000.");
});

app.use(fileupload());
app.use('/post/store', validatemiddleware);

app.get("/", homectrl);
app.get("/post/new", newpostctrl);
app.get("/about", aboutctrl);
app.get("/contact", contactctrl);
app.get("/post/:id", getpostctrl);
app.get("/users/register", newuserctrl);

app.post("/post/search", searchctrl);
app.post("/post/store", storepostctrl);

app.use(nofoundctrl);

