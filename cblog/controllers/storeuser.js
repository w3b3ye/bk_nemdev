var user = require("../models/user.js");
var path = require("path");

module.exports = (req, res) => {
    user.create(req.body, (error, user) => {
        //console.log(error)
        if (error) { return res.redirect('/users/register') }
        res.redirect("/");
    });
};