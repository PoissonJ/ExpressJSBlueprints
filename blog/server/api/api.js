var router = require('express').Router();

var userRoutes = require('./users/userRoutes');
var categoryRoutes = require('./category/categoryRoutes');
var postRoutes = require('./post/postRoutes');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/posts', postRoutes);

module.exports = router;
