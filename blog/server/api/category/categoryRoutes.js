var router = require('express').Router();
var logger = require('../../util/logger');

router.route('/')
  .get(function(req, res) {
    logger.log('Hello from category');
    res.send({ok: true});
  });

module.exports = router;

