var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var _ = require('lodash');
var app = express();


app.use(express.static('.'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan());

var lions = [];
var id = 0;

var updateId = function(req, res, next) {
  if (!req.body.id) {
    id++;
    req.body.id = id + '';
  }
  next();
}

app.param('id', function(req, res, next, id) {
  var lion = _.find(lions, {id: req.params.id});

  if (lion) {
    req.lion = lion;
    next();
  } else {
    res.status(500).send();
  }
});

app.get('/lions', function(req, res) {
  res.send(lions);
});

app.get('/lions/:id', function(req, res) {
  res.json(req.lion || {});
});

app.post('/lions', updateId, function(req, res) {
  var lion = req.body;

  lions.push(lion);

  res.json(lion);
});

app.put('/lions/:id', function(req, res) {
  var update = req.body;
  if (update.id) {
    delete update.id
  }

  var lion = _.findIndex(lions, {id: req.params.id});
  if (!lions[lion]) {
    res.status(500).send();
  } else {
    var updatedLion = _.assign(lions[lion], update);
    res.json(updatedLion);
  }
});

app.delete('/lions/:id', function(req, res) {
  var lion = _.findIndex(lions, {id: req.params.id});
  if (!lions[lion]) {
    res.status(500).send();
  } else {
    var deletedLion = lions[lion]
    lions.splice(lion, 1);
    res.json(deletedLion);
  }
});


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
