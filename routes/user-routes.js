const express =require('express')
const passport = require('passport')
const router = express.Router()
const User =require('../models/User')

//login user view
router.get('/login', (req,res)=>{
    res.render('user/login')
})


router.post('/login', (req,res)=>{
    console.log(req.body)
    res.json('login user ... ')
})

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
router.get('/profile', (req,res)=>{
    res.render('user/profile',{
        success: req.flash('success')
    })
})

//logout user
router.get('/logout', (req,res)=>{
    res.json('logout user....')
})

module.exports = router 