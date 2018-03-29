var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var port = process.env.PORT || 3000;

var app = express();

//Middleware===========================>

//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//views
app.use(express.static(path.join(__dirname,'public')));

//rendering the html page

app.get('/', function(req, res){
    res.render('./public/index');
});
//=============>End Middleware

app.listen(3000, function(){
    console.log('Server starting on Port 3000');
})