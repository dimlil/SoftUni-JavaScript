const express = require('express');
const app = express();
const port = 3000;
const homePageRouter = require('./routes/home-page');
const handlebars = require('express-handlebars');

app.engine('.hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', __dirname + '/views');

app.set('view options', {
    layout: 'main'
});

app.get('/home-page-test', (req, res) => {
    res.render('home-page');
});

app.get('/about', (req, res) => {
    res.render('about-template', {
        layout: 'about'
    });
})
app.get('/someting', (req, res) => {
    res.render('something-template');
})

app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public/static.html'));

app.use('/', homePageRouter);

app.get('/something', (req, res, next) => {
    //sumolating going to db logic
    req.numbers = [1, 2, 3];
    next();
}, (req, res) => {
    res.send(`numbers: ${req.numbers}`);
});
app.get('/search', (req, res) => {
    res.send('Search Page');
});
app.post('/users', (req, res) => {
    res.send('Users:[1,2,3,4]');
});
app.get('/profile/:user/:id', (req, res) => {
    const user = req.params.user;
    const id = req.params.id;
    res.send(`user: ${user}, id: ${id}`);
});
app.all('*', (req, res) => {
    res.send("PAGE NOT FOUND");
});
app.listen(port, (err) => {
    if (err) {
        console.log('ERROR: ', err);
        return;
    }
    console.log(`Server is up and running on port: ${port}`);
});