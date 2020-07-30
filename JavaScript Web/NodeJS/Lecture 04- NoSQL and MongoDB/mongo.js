const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionStr = 'mongodb://localhost:27017';
const client = new MongoClient(connectionStr);

client.connect(function (err) {
    const db = client.db('softuni');
    const people = db.collection('people');
    people.insert({
        'name': 'Ivan'
    }, (err, result) => {
        people.find({
            name: 'Ivan'
        }).toArray((err, data) => {
            console.log(data);
        });
    });
});