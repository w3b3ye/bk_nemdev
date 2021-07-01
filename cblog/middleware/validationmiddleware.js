module.exports = (req, res, next) => {
    if (!req.files || !req.files.image || !req.body.title) {
        return res.redirect('/post/new')
    }
    next();
};