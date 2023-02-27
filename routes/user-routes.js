const express =require('express')
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
    res.render('user/signup')
})

//sign up post req
router.post('/signup', (req,res)=>{
    console.log(req.body)
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