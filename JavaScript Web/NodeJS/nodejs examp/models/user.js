const mongoose = require('mongoose');
const UserShcema = new mongoose.Schema({

    email: {
        type: String,
        // required: true,
        // unique: true
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    tipHistory: [{
        type: 'ObjectId',
        ref: 'Trip'
    }]

})

module.exports = mongoose.model('User', UserShcema);