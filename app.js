const express =require('express')
const app =express()
const db =require('./config/database')
const bodyParser =require('body-parser')

//bring ejs template 
app.set('view engine', 'ejs')

//bring body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//bring static
app.use(express.static('public'))
app.use(express.static('node_modules'))

app.get('/', (req,res)=>{

    res.send("it is working from web")
})


//bring events routes
const events =require('./routes/event-routes')
const { urlencoded } = require('body-parser')
app.use('/events', events)


//listen to port 8081
app.listen(8081 ,() =>{
    console.log("app is working from port 8081")
})