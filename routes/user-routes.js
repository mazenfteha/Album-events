const express =require('express')
const router = express.Router()
const User =require('../models/User')

//login user view
router.get('/login', (req,res)=>{
    res.render('user/login')
})


router.post('/login', (req,res)=>{
    res.json('login user ... ')
})

//sign up form
router.get('/signup', (req,res)=>{
    res.render('user/signup')
})

//sign up post req
router.get('/signup', (req,res)=>{
    res.json('register user ... ')
})

//profile
router.get('/profile', (req,res)=>{
    res.render('user/profile')
})

//logout user
router.get('/logout', (req,res)=>{
    res.json('logout user....')
})

module.exports = router 