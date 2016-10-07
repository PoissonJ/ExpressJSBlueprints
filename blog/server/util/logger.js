require('colors');
var _ = require('lodash');

var config = require('../config/config');

// create a noop (no operation) form when logging is disabled
var noop = function(){};

// Check if logging is enabled in the config
var consoleLog = config.logging ? console.log.bind(console): noop;

var logger = {
  log: function() {
    // arguments is an arry like object with all the passed
    // in arguments to this function
    var args = _.toArray(arguments)
      .map(function(arg) {
        if (typeof arg == 'object') {
          var string = JSON.stringify(arg, 2);
          return string.magenta;
        } else {
          arg += '';
          return arg.magenta;
        }
      });

    // Call either console.log or noop here
    // with the console object as the context
    consoleLog.apply(console, args);
  }
};

module.exports = logger;
