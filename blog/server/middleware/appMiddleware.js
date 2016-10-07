var morgan = require('morgan');
var bodyParder = require('body-parser');

// Setup global middleware
module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
};
