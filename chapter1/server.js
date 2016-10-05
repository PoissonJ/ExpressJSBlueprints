var path = require('path');
var express = require('express');
var app = express();

var jsonData = {count: 12, message: 'hey'};

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get('/data', function(req, res) {
  res.send(jsonData);
});

app.listen(3000);
