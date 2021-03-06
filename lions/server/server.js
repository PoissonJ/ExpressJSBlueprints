var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

var lionRouter = require('./lions');

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/lions', lionRouter);

/**
 * Error handler
 */
app.use(function(err, req, res, next) {
  if (err) {
    console.log(err.message);
    res.status(500).send(err);
  }
});

module.exports = app;
