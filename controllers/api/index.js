const router = require('express').Router();

router.use('/users', require('./user-routes'));
router.use('/blog', require('./blogroutes'))

module.exports = router;