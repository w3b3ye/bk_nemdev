var blogpost = require("../models/blogpost.js");

module.exports = async (req, res) => {
    var blogposts = await blogpost.find({});
    res.render("index", {
        blogposts: blogposts
    });
};