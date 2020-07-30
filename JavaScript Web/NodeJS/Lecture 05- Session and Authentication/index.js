const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())
app.use(cookieParser());
app.use(session({
    secret: 'softuni-secret-key'
}, {
    httpOnly: true
}, {
    secure: true
}))

app.get('/', (req, res) => {
    res.cookie('message', 'Hello auth server')
    res.cookie('sid', 'c16565132316')

    req.session.userId = 1
    req.session.email = 'dim@abv.bg'

    res.send({
        message: "Hello Auth Server"
    })
})
app.get('/search', (req, res) => {
    //console.log(req.cookies);
    res.send({
        pageMessage: 'index page',
        ...req.cookies,
        session: req.session
    })
})

//bcrypt
app.post('/signup', (req, res) => {
    const {
        username,
        password
    } = req.body
    const SALT_ROUNDS = 10
    bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
        console.log("Salt: ", salt);
        bcrypt.hash(password, salt, (error, hash) => {
            console.log("Hash: ", hash);
            req.session.username = username
            req.session.password = hash
            res.send({
                message: 'login is successful'
            })
        })
    })
})

app.post('/login', (req, res) => {
    console.log(req.session.password);
    const {
        password,
        username
    } = req.body

    if (username !== req.session.username) {
        return res.send({
            message: 'User is NOT Authenticated - Wrong name'
        })
    }

    bcrypt.compare(password, req.session.password, (err, status) => {

        res.send({
            message: status ? 'User is Authenticated' : 'User is NOT Authenticated - Wrong Password' //if status is true return user is auth else is not
        })
    })

})

app.listen(3000, () => {
    console.log(`Server is up and running`);
})