var express = require('express');
var app = express();
var api = require('./api/api'); // Router
var err = require('./middleware/err')

// Setup middleware
require('./middleware/appMiddleware')(app);

// Setup the api
app.use('/api', api);

// Error handling
app.use(err());

module.exports = app

