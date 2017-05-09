var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

var fs = require('fs');

var data = fs.readFileSync('./public/posts.json');

var post = JSON.parse(data);

console.log(post);

app.get('/', function (req, res) {
  res.render('home');
});


app.listen(3000, function() {
  console.log("The application is running on  localhost:3000");
});
