const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('blog')
})
module.exports = router;