// TODO: Require Controllers...

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index', {
            title: 'Cube Workshop'
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
    app.get('/details', (req, res) => {
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