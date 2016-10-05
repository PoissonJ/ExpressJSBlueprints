var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var app = express();


app.use(express.static('.'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var lions = [];
var id = 0;

app.get('/lions', function(req, res) {
  res.send(lions);
});

app.get('/lions/:id', function(req, res) {
  var lion = _.find(lions, {id: req.params.id});
  res.json(lion || {});
});

app.post('/lions', function(req, res) {
  var lion = req.body;
  id++;
  lion.id = id + '';

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


app.listen(3000);
console.log('Listening on port 3000');
