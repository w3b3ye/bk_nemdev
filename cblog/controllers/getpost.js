var blogpost = require("../models/blogpost.js");
var path = require("path");

module.exports = async (req, res) => {
    var blogposts = await blogpost.findById(req.params.id);
    res.render("post", { blogposts });
};