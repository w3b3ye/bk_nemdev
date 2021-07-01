var blogpost = require("../models/blogpost.js");

module.exports = async (req, res) => {
    var term = req.body.txt;
    const query = { $text: { $search: term } };

    var blogposts = await blogpost.find(query);
    //console.log(blogposts);
    if (blogposts != "") {
        res.render("index", {
            blogposts: blogposts
        });
    }
    else {
        res.status(404).render("nofound");
    }
};