const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const TripSchema = new mongoose.Schema({
    start: {
        type: String,
        required: true,
    },
    end: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    seats: {
        type: Number,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    buddies: {
        type: [{ObjectId}],
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Trip', TripSchema);
