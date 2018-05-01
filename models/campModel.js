var mongu =require("mongoose");

// Campground Schema
var campSchema = new mongu.Schema({
    name        : String,
    content     : String,
    imageURL    : String,
    comments    :[{
        type : mongu.Schema.Types.ObjectId,
        ref  : "comment"
    }] 
});

module.exports = mongu.model("campground",campSchema);
