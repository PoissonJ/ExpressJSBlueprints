const express = require('express');
const mongoose = require('mongoose');
var User = require('./models/user');
var passport = require('./passport');
var app = express();

mongoose.connect('mongodb://localhost/chapter01', funciton(err) {
  if (err) throw err;
});

app.use(require('cookie-parser')('my secret string'));
app.use(require('express-session')({ secret: "my other secret string" }));
app.use(require('body-parser')());
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'jade');
app.set('views', __dirname +  '/views');

app.get('/', function(req, res, next) {
  res.render('index');
})

app.listen(3000);
console.log('Express started on port 3000');
