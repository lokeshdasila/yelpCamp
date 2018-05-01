// Caution this is to delete all the stuff and add some random stuff

var mongu   = require("mongoose");
var campModel = require("./models/campModel.js");
var commentModel = require("./models/comments.js");

mongu.connect("mongodb://localhost/yelpcampDB");
var defaultData = [
    {
        name        : "Some Mountain Camp",
        content     : "Ice cream caramels lemon drops jelly beans halvah powder sweet roll caramels chupa chups. Chocolate cake sweet gummi bears danish macaroon. Wafer toffee chocolate cake candy canes croissant muffin macaroon cake bonbon. Brownie fruitcake halvah. Jelly-o danish donut chocolate sweet roll. Jelly liquorice cotton candy apple pie croissant brownie tart tart. Muffin gingerbread cookie pie gingerbread lemon drops. Croissant cupcake pastry croissant dragée marzipan cheesecake fruitcake. Fruitcake sugar plum lemon drops jelly-o topping. Chocolate brownie liquorice topping apple pie jelly-o sugar plum tiramisu. Jelly-o tootsie roll lemon drops muffin cotton candy lollipop marshmallow tiramisu. Sweet pudding marzipan halvah. Sugar plum cupcake sweet roll macaroon croissant lollipop muffin. Gingerbread cupcake sesame snaps.",
        imageURL    : "https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    },
    {
        name        : "Didihat",
        content     : "Cookie soufflé fruitcake bonbon. Sesame snaps liquorice candy canes. Jelly beans pastry carrot cake danish croissant. Cake candy fruitcake. Jelly marzipan bear claw sweet chocolate chocolate bar marshmallow soufflé dessert. Cupcake chocolate tart chocolate liquorice cupcake brownie soufflé. Muffin jelly beans cake jelly cake. Lollipop lemon drops macaroon candy. Donut soufflé dragée jelly danish muffin sugar plum toffee tootsie roll. Danish chocolate cake macaroon jujubes. Macaroon carrot cake gingerbread gummies dessert bonbon gingerbread candy canes. Candy marshmallow cake liquorice chocolate muffin cotton candy gummies pie. Apple pie muffin jujubes biscuit.",
        imageURL    : "/photos/didihat.jpg"
    },
    {
        name        : "Sukhna Swag",
        content     : "Ice cream gummi bears jelly-o ice cream apple pie cheesecake tiramisu muffin. Pastry icing tootsie roll carrot cake halvah cupcake carrot cake danish tootsie roll. Gummies dragée croissant sweet. Candy sesame snaps icing powder cake gummies cheesecake. Carrot cake oat cake tart apple pie sweet roll jelly-o cupcake tart. Cake danish cake jujubes. Apple pie jelly-o cake tiramisu. Cheesecake chupa chups gummi bears croissant gummies. Jelly beans sweet lemon drops. Biscuit cake sesame snaps caramels candy canes marzipan tootsie roll. Dragée candy bonbon powder carrot cake wafer ice cream tart liquorice. Danish tootsie roll chupa chups jujubes. Chocolate gummi bears topping chocolate caramels bear claw. Powder powder sweet marshmallow wafer marzipan brownie cupcake.",
        imageURL    : "/photos/sukhnaSwag.png"
    },
    {
        name        : "Early Morning Chandi!!!",
        content     : "Liquorice toffee brownie cupcake cookie cookie. Carrot cake brownie caramels powder pudding gummi bears jujubes wafer. Sugar plum topping cheesecake jelly beans. Cookie caramels sweet roll. Chocolate cake tart toffee marshmallow carrot cake pastry croissant cookie. Jelly beans apple pie tootsie roll sesame snaps donut. Icing halvah lemon drops gummi bears tiramisu jelly jelly beans icing. Gummi bears oat cake halvah donut icing chupa chups powder marzipan dragée. Brownie jelly beans apple pie icing jujubes tiramisu dessert tart. Tootsie roll croissant jelly beans oat cake toffee danish sweet roll. Bonbon dessert toffee caramels cookie danish tart ice cream bonbon. Candy canes bonbon pastry pudding ice cream fruitcake.",
        imageURL    : "/photos/earlyMorningChandi.jpg"
    }
]

var someComments = [
    {
        content : "This is the swag",
        author  : "Swag Singh"
    },
    {
        content : "Some beauty of the hometown",
        author  : "Small town boy"
    },
    {
        content : "Yo!! Swagged up",
        author  : "Swag Singh"
    },
    {
        content : "CHANDIgarh",
        author  : "Samsher Chandi"
    }
]

campModel.remove({},(err)=>{
    if(err)
        console.log(err);
    else{
        
        console.log("Removed data sucessfully");
        var campCount=0;
        defaultData.forEach((item)=>{
            campModel.create(item,(err,addedCamp)=>{
                if(err){
                    console.log("Some error in entering the camp data");
                }
                else{
                    console.log("campground added");
                    commentModel.create(someComments[campCount],(err,addedComment)=>{
                        if(err){
                            console.log("Some Error"+err);
                        }
                        else{
                            console.log("Comment addded to database "+addedComment);
                            addedCamp.comments.push(addedComment);
                            addedCamp.save((err,addedSave)=>{
                                if(err){
                                    console.log("Some error on saving");
                                }
                                else
                                    console.log("Saved");
                            })
                        }
                        campCount++;
                    })
                    
                }
                
            })  
        })
    }
    //mongu.disconnect();
})
