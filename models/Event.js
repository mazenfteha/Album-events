const mongoose = require('mongoose')
const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    }
})

let Event =mongoose.model('Event',eventSchema, 'Album-events')

module.exports = Event 