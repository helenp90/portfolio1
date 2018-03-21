var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//Middleware

// var logger = function(req, res, next){
//     console.log('logging....')
//     next();
// }
// app.use(logger);
//MW for bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//MW for views
app.use(express.static(path.join(__dirname,'public')));



app.get('/', function(req, res){
    res.render('./public/index');
});

app.listen(3000, function(){
    console.log('Server starting on Port 3000');
})