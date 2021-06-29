/**Model for cblog. */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var blogpostSchema = new Schema({
    title: String,
    body: String
});

//Create index for full text search. Use of index method has been depreciated
//blogpostSchema.index({ title: "text", body: "text" });

var blogpost = mongoose.model('blogpost', blogpostSchema);
module.exports = blogpost;

//Create index for full text search
blogpost.createIndexes({ title: "text", body: "text" });

