var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

var lionRouter = require('./lions');

app.use(express.static('.'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan());

app.use('/lions', lionRouter);


/**
 * Error handler
 */
app.use(function(err, req, res, next) {
  if (err) {
    res.status(500).send(err);
  }
});

app.listen(3000);
console.log('Listening on port 3000');
