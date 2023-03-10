const express =require('express')
const passport = require('passport')
const router = express.Router()
const User =require('../models/User')

//middleware to check if user is logged in
isAuthenticated =(req,res,next)=>{
    if (req.isAuthenticated()) return next()
    res.redirect('/users/login')
}

//login user view
router.get('/login', (req,res)=>{
    res.render('user/login', {
        error: req.flash('error')
    })
})


router.post('/login',
passport.authenticate('local.login',{
    successRedirect: '/users/profile',
    failureRedirect: '/users/login',
    failureFlash: true })
)

//sign up form
router.get('/signup', (req,res)=>{
    res.render('user/signup', {
        error: req.flash('error')
    })
})

//sign up post req
router.post('/signup',
passport.authenticate('local.signup',{
    successRedirect: '/users/profile',
    failureRedirect: '/users/signup',
    failureFlash: true })
)

//profile
router.get('/profile',isAuthenticated,(req,res)=>{
    res.render('user/profile',{
        success: req.flash('success')
    })
})

//logout user
router.get('/logout', (req,res,next)=>{
    req.logout(function(err){
        if (err) { return next(err); }
    });
    res.redirect('/users/login');
})

module.exports = router 