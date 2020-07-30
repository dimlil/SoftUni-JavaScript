const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    facultyNumber: {
        type: Number,
        require: true,
        unique: true
    }
});

module.exports=mongoose.model('Srudent',StudentSchema)