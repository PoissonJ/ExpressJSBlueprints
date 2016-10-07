var router = require('express').Router();
var logger = require('../../util/logger');

router.route('/')
  .get(function(req, res, next) {
    logger.log('Hello from posts');
    return next(new Error('messed up'));
    res.send({ok: true});
  });

module.exports = router;
