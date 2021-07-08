/** Clean-blog main index file. */

//Import statements
var express = require("express");
var ejs = require("ejs");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var fileupload = require("express-fileupload");
var exprxsession = require("express-session");

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
var storeuserctrl = require('./controllers/storeuser');
var loginctrl = require('./controllers/login');
var loginuserctrl = require('./controllers/loginuser');
var loggedinctrl = require('./controllers/loggedin');

//middlewares
var validatemiddleware = require('./middleware/validationmiddleware.js');
var usermiddleware = require('./middleware/usermiddleware.js')
var ifauthenticatedmiddleware = require('./middleware/ifauthenticatedmiddleware.js')

//Database
mongoose.connect("mongodb://localhost:27017/db_cblog", { useNewUrlParser: true });

//Create an app
var app = express();

//Misc
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(exprxsession({
  secret: 'secret key'
}));

app.listen(4000, function () {
  console.log("App is listening on port 4000.");
});

app.use(fileupload());
app.use('/post/store', validatemiddleware);

app.use("*", loggedinctrl);
app.get("/", homectrl);
app.get("/post/new", usermiddleware, newpostctrl);
app.get("/about", aboutctrl);
app.get("/contact", contactctrl);
app.get("/post/:id", getpostctrl);
app.get("/users/register", ifauthenticatedmiddleware, newuserctrl);
app.get("/users/login", ifauthenticatedmiddleware, loginctrl);

app.post("/post/search", searchctrl);
app.post("/post/store", usermiddleware, storepostctrl);
app.post("/users/register", ifauthenticatedmiddleware, storeuserctrl);
app.post("/users/login", ifauthenticatedmiddleware, loginuserctrl);

app.use(nofoundctrl);

