/**Model for cblog. */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var blogpostSchema = new Schema({
    title: String,
    body: String
});

var blogpost = mongoose.model('blogpost', blogpostSchema);
module.exports = blogpost;