var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

var fs = require('fs');

var data = fs.readFileSync('./public/posts.json');

var post = JSON.parse(data);

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/login', function (req, res) {
  res.render('login');
});

app.get('/signup', function (req, res) {
  res.render('signup');
});

app.post('/signup', function (req, res) {
	//need to figure out way to get data from forms and push to database
	console.log(req.body.email);
	console.log(req.body.user);
	console.log(req.body.pass);
	res.redirect('/');
});

app.post('/login', function (req, res) {
	//get data from forms and check with database
	console.log(req.body.user);
	console.log(req.body.pass);
	res.redirect('/');
});

app.listen(3000, function() {
  console.log("The application is running on  localhost:3000");
});
