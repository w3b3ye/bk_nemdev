var blogpost = require("../models/blogpost.js");

module.exports = async (req, res) => {
    var blogposts = await blogpost.find({});
    //console.log(req.session);
    res.render("index", {
        blogposts: blogposts
    });
};