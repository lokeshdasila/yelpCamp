var mongu =require("mongoose");

// comment Schema
var commentSchema = new mongu.Schema({
    content : String,
    author  : String
});

module.exports = mongu.model("comment",commentSchema);
