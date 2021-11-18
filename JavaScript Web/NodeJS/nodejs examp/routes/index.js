const { Router } = require('express');
const { validationResult } = require('express-validator');
const { getAllTrips, getTrip } = require('../controllers/trip');
const { getUserStatus, checkAuthentication, getEmailForHome } = require('../controllers/user');
const { copyWithin } = require('../controllers/validation');
const validation = require('../controllers/validation');
const Trip = require('../models/trip');

const router = Router();

router.get('/', getUserStatus, getEmailForHome, async (req, res) => {
    res.render('home', {
        isLoggedIn: req.isLoggedIn,
        email: req.user.email
    });
})
router.get('/shared', getUserStatus, checkAuthentication, getEmailForHome, async (req, res) => {
    const trips = await getAllTrips()
    res.render('shared', {
        isLoggedIn: req.isLoggedIn,
        email: req.user.email,
        trips
    });
})
router.get('/create', getUserStatus, checkAuthentication, getEmailForHome, async (req, res) => {
    res.render('create', {
        isLoggedIn: req.isLoggedIn,
        email: req.user.email
    });
})
router.post('/create', checkAuthentication, validation, async (req, res) => {
    const errors = validationResult(req)
    const { _id } = req.user
    if (!errors.isEmpty()) {
        return res.render('create', {
            message: errors.array()[0].msg
        })
    }
    const { startEnd, date, imgUrl, seats, description } = req.body;
    const separateStartEnd = startEnd.split('-');
    const start = separateStartEnd[0].trim()
    const end = separateStartEnd[1].trim(0)
    const separateDateTime = date.split('-');
    const sepDate = separateDateTime[0].trim()
    const time = separateDateTime[1].trim()

    const trip = new Trip({ start, end, date: sepDate, time, seats, imgUrl, description, creator: _id })
    await trip.save()
    res.redirect('/shared')
})
router.get('/details/:id', getUserStatus, checkAuthentication, (req, res) => {
    const trip = getTrip(req.params.id)
    // console.log(trip);
    res.render('detailes', {
        trip
    })
})
router.get('/*', (req, res) => {
    res.render('errorPage')
})


module.exports = router;