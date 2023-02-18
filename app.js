const express =require('express')
const app =express()

app.get('/', (req,res)=>{

    res.send("it is working from web")
})


//bring events routes
const events =require('./routes/event-routes')
app.use('/events', events)


//listen to port 8081
app.listen(8081 ,() =>{
    console.log("app is working from port 8081")
})