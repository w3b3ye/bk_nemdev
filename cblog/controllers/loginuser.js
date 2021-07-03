var bcrypt = require("bcrypt");
var user = require("../models/user");

module.exports = (req, res) => {
    var { username, password } = req.body;

    user.findOne({ username: username }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    res.redirect("/")
                }
                else {
                    res.redirect("/users/login")
                }
            })
        }
        else {
            res.redirect("/users/login")
        }
    })
}