var user = require("../models/user");
module.exports = (req, res, next) => {
    user.findById(req.session.userId, (error, user) => {
        if (error || !user)
            return res.redirect("/");

        next();
    })
}