var mongu = require("mongoose"),
    plm   = require("passport-local-mongoose");

var UserSchema = new mongu.Schema({
    username : String,
    password : String
})

UserSchema.plugin(plm);

module.exports = mongu.model("user",UserSchema);