/**Model for cblog. */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

var userSchema = new Schema({
    username: String,
    password: String,
});

userSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
    });

});

var user = mongoose.model('user', userSchema);
module.exports = user;