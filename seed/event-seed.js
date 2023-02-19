const db =require('../config/database')
const Event =require('../models/Event')

let newEvent =new Event({
    title: 'this is event one',
    description: 'this is first event',
    location: 'Egypt',
    date: Date.now()
})

newEvent.save( (err)=> {
    
    if(!err) {
        console.log('record was added')
    } else{
        console.log(err)
    }
})