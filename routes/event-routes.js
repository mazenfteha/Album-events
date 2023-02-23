const express =require('express')
const router = express.Router()
const Event =require('../models/Event')
const {check, validationResult} =require('express-validator')

//route to home events
router.get('/', (req,res)=>{
    Event.find({}, (err,events) =>{
        //res.json(events)

        let chunk = []
        let chunkSize =3
        for(let i = 0 ; i<events.length ;i+=chunkSize){
            chunk.push(events.slice( i, chunkSize + i))
        }
        //res.json(chunk)
        res.render('event/index', {
            chunk: chunk,
            message: req.flash('info')
        })
    })
})

//create new event
router.get('/create', (req,res)=>{
    res.render('event/create', {
        errors: req.flash('errors')
    })
})

//save event to db
router.post('/create', [
    check('title').isLength({min: 5}).withMessage('Title should be more than 5 char'),
    check('description').isLength({min: 5}).withMessage('Description should be more than 5 char'),
    check('location').isLength({min: 3}).withMessage('Location should be more than 3 char'),
    check('date').isLength({min: 5}).withMessage('Date should valid Date'),

] , (req,res)=> {

    const errors = validationResult(req)

    if( !errors.isEmpty()) {
        req.flash("errors",errors.array())
        res.redirect('/events/create')
    } else {
        
        let newEvent = new Event({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            location: req.body.location,
            created_at: Date.now()
        })

        newEvent.save( (err)=> {
            if(!err) {
                console.log('event was added')
                req.flash('info', 'the album event was created successfuly')
                res.redirect('/events')
            } else {
                console.log(err)
            }
        })
    }
   
})

//show single event
router.get('/:id', (req,res)=>{

    Event.findOne({_id: req.params.id}, (err,event)=>{
        if(!err){
            res.render('event/show', {
                event: event
            })
        }else {
            console.log(err)
        }
        
    })
    
})


module.exports = router