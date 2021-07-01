var blogpost = require("../models/blogpost.js");
var fileupload = require("express-fileupload");
var path = require("path");

module.exports = async (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, "..", "public/img", image.name), async (error) => {
        await blogpost.create({ ...req.body, image: '/img/' + image.name });
        res.redirect("/");
    });
};
