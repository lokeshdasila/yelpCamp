var mongu = require('mongoose');
mongu.connect("mongodb://localhost/catApp");

var catSchema = new mongu.Schema({
    name : String,
    isYo : Boolean,
    age : Number
});

var catModel = mongu.model("cat",catSchema);

// ADD TO THE DATABASE

// var george = new catModel({
//     name : "george",
//     isYo  : true,
//     age : 20
// });

// george.save((err,cat)=>{
//     if(err){
//         console.log("Something went wrong!! cat not added");
//         cosole.log(err);
//     }
//     else
//     {
//         console.log(cat);
//     }
// });

catModel.find({},(err,cats)=>{
    if(err){
        console.log("ERROR!! Couldn't FIND");
        console.log(err);
    }
    else{
        console.log(cats);
    }
});