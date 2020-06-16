// TODO: Require Controllers...
const {getAllCubes} = require('../controllers/cubes');
const {getCubes} = require('../controllers/database');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index', {
            title: 'Cube Workshop',
            // cubes: getAllCubes(),
            cubes: getCubes(),
        });
    });
    app.get('/about', (req, res) => {
        res.render('about', {
            title: 'About cube Workshop'
        })
    });
    app.get('/create', (req, res) => {
        res.render('create', {
            title: 'Create Cube'
        })
    });
    app.get('/details/:id', (req, res) => {
        res.render('details', {
            title: 'Details'
        })
    });
    app.get('*', (req, res) => {
        res.render('404', {
            title: 'Page not faund'
        })
    });
};