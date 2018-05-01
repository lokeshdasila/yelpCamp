var express    = require('express');
var bodyParser = require('body-parser');
var mongu      = require('mongoose'); 
var app        = express();
var campModel  = require("./models/campModel");
mongu.connect("mongodb://localhost/yelpcampDB");

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true})); // body parser
app.use(express.static('public')); // default static files directory is 'public'

var port = process.env.port || 3000; 
var ip = process.env.ip || '127.0.0.1';


// var campgrounds = [
//     {name : "Mountains", imageURL : "https://pixabay.com/get/eb35b70b2df6033ed1584d05fb1d4e97e07ee3d21cac104497f3c17ca5e9b0bf_340.jpg"},
//     {name : "Beach", image : "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b0144396f0c47ba3e8b2_340.jpg"},
//     {name : "Kids", image : "https://pixabay.com/get/ea37b70d21f0003ed1584d05fb1d4e97e07ee3d21cac104497f3c17ca5e9b0bf_340.jpg"},
//     {name : "Night", image : "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144396f0c47ba3e8b2_340.jpg"}
// ]

// // CREATE
// campModel.create(campgrounds[0],(err,camp)=>{
//     if(err){
//         console.log("Error!!! Couldn't create... \n"+err);
//     }
//     else{
//         console.log("Entry created\n"+camp);
//     }
// });

app.get('/',function(req,res){
    console.log('User entered landing page');
    res.render('landingPage');
});

app.get('/campgrounds',function(req,res){
    console.log("campgrounds page");
    campModel.find({},(err,camps)=>{
        if(err){
            console.log("Error finding the data");
        }
        else{
            res.render("campgrounds.ejs",{campgrounds : camps});
        }    
    })
    
})

app.post('/campgrounds',(req,res)=>{
    var newName = req.body.placeName;
    var newImage = req.body.imageURL;
    var newCamp = {name : newName,imageURL : newImage};
    campModel.create(newCamp,(err,camp)=>{
        if(err){
            console.log("Error!!! Couldn't create... \n"+err);
        }
        else{
            console.log("Entry created\n"+camp);
        }
    });
        
    //campgrounds.push(newCamp);
    res.redirect('/campgrounds');
});

app.get("/campgrounds/addcamp",(req,res)=>{
    res.render("addcamp.ejs");
});

app.listen(port,ip,()=>{
    console.log("Server started at port "+port+" and ip "+ip);
});
