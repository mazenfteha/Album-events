const express =require('express')
const app =express()
const db =require('./config/database')
const bodyParser =require('body-parser')
const session =require('express-session')
const flash =require('connect-flash')

//bring ejs template 
app.set('view engine', 'ejs')

//bring body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//bring static
app.use(express.static('public'))
app.use(express.static('node_modules'))

//session and flash config.
app.use(session({
    secret:'mazen',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 60000 *15}
}))
app.use(flash())

app.get('/', (req,res)=>{

    res.send("it is working from web")
})


//bring events routes
const events =require('./routes/event-routes')
const { urlencoded } = require('body-parser')
app.use('/events', events)

//bring user routes
const users =require('./routes/user-routes')
app.use('/users', users)


//listen to port 8081
app.listen(8081 ,() =>{
    console.log("app is working from port 8081")
})