// entry point of server
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hello', function(req, res){
    res.send({message:'Hello world!!!'});
}); // it allowed us to create urls that allowed us to call the server from outside and ask for data;

// configure a public directory to host static content
//Everything in public will be checked
app.use(express.static(__dirname + '/public'));


require ("./test/app.js")(app);
var myApp = require ("./lecture/app");
//It declare its own namespace. require mechanism
myApp(app);

var port = process.env.PORT || 3000;

app.listen(port);