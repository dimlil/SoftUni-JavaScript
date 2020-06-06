const express = require('express');
const app = express();
const port = 3000;
const homePageRouter=require('./routes/home-page')

app.use('/',homePageRouter)

app.get('/something', (req, res, next) => {
    //sumolating going to db logic
    req.numbers=[1,2,3];
    next()
}, (req, res) => {
    res.send(`numbers: ${req.numbers}`);
})
app.get('/search', (req, res) => {
    res.send('Search Page');
});
app.post('/users', (req, res) => {
    res.send('Users:[1,2,3,4]');
});
app.get('/profile/:user/:id', (req, res) => {
    const user=req.params.user;
    const id=req.params.id;
    res.send(`user: ${user}, id: ${id}`);
});
app.all('*',(req,res)=>{
    res.send("PAGE NOT FOUND");
});
app.listen(port, (err) => {
    if (err) {
        console.log('ERROR: ', err);
        return;
    }
    console.log(`Server is up and running on port: ${port}`);
})