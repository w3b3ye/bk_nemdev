//Global variables
global.loggedIn = null;

module.exports = (req, res, next) => {
    loggedIn = req.session.userId;
    next();
};