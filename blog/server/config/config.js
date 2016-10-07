var _ = require('lodash');

// Default config for the application
var config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000
};

// Set enviroment
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

var envConfig = {};
envConfig = require('./' + config.env);

module.exports = _.merge(config, envConfig);
