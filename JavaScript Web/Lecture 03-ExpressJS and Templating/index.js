const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to our application');
});
app.get('/search', (req, res) => {
    res.send('Search Page');
});
app.post('/users', (req, res) => {
    res.send('Users:[1,2,3,4]');
});

app.listen(port, (err) => {
    if (err) {
        console.log('ERROR: ', err);
        return;
    }
    console.log(`Server is up and running on port: ${port}`);
})