var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();

app.set('view engine',ejs);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

var port = process.env.port || 3000;
var ip = process.env.ip || 127.0.0.1;

