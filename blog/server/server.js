var express = require('express');
var app = express();
var api = require('./api/api'); // Router

// Setup middleware
require('./middleware/appMiddleware')(app);

// Setup the app
app.use('/api/', api);

module.export = app
