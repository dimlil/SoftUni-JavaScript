const mongoose = require('mongoose');
const StudentModule = require('./student');
const student = require('./student');
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.vtyhx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, function (err) {
    if (err) {
        console.log(err);
        return
    }
    // StudentModule.find((err,data)=>{
    //     console.log(data);
    // })
    // StudentModule.findByIdAndUpdate('5efe66ee0d0f4b2220e6b98d', {
    //     $set: {
    //         lastName: 'Peshov'
    //     }
    // }, (err, data) => {
    //     console.log(data);
    // })
    StudentModule.findByIdAndRemove('5efe66ee0d0f4b2220e6b98d',(err, data) => {
        console.log(data);
    })
})