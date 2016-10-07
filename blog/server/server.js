var express = require('express');
var app = express();
var api = require('./api/api'); // Router

// Setup middleware
require('./middleware/appMiddleware')(app);

// Setup the api
app.use('/api', api);

// Error handling

module.exports = app
