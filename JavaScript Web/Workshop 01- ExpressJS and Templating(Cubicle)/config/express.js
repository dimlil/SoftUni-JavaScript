const express = require('express');
const handlebars = require('express-handlebars');
module.exports = (app) => {

    app.engine('.hbs', handlebars({
        extname: '.hbs'
    }));
    app.set('view engine', '.hbs');
    app.use('/static', express.static('static'));
};