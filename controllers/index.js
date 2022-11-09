const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


//----routes----
router.use('/api', require('./api'));

//----home routes----
router.get('/', async (req, res) => {
  res.render('homepage',{
    // logged_in: req.session.logged_in
  });
});

router.get('/login', async (req, res) =>{
  res.render('login')
}), 

module.exports = router;

//homepage --> homepage
//other links --> sign up/sign in
//sign up --> prompt to create username & password
//sign up button --> info saved then logged in
//dashboard 
//login
//log out --> signed out
//idle --> signed out
//existing blog post
//comment submit
//new blog post
//create blog post
//existing blog post
//update post --> dashboard
//delete post --> dashboard



