const mongoose =require('mongoose')
mongoose.set('strictQuery', false);


mongoose.connect('mongodb://localhost:27017/Album-events',{ useNewUrlParser: true },(err)=>{
    if (err){
        console.log(err)
    }else{
        console.log("connected to db succesfuly")
    }
})