const mongoose = require('mongoose');
const StudentModule = require('./student');
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.vtyhx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, function (err) {
    if (err) {
        console.log(err);
        return
    }
    const newStudent = {
        firstName: "Gosho",
        lastName: "Pesho",
        facultyNumber: 1234513
    }
    new StudentModule(newStudent).save((error)=>{
        if (error) {
            console.log(err);
            return
        }
        console.log('Student is successfuly stored!');
        
    })
})