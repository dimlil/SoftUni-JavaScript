const Trip = require('../models/trip.js');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const getAllTrips = async (callback) => {
    const trip = await Trip.find().lean();
    return trip;
}
const getTrip = async (id) => {
    id = id.slice(1, -1)
    console.log(id);
    // const trip = await Trip.findOne({'_id':new ObjectId(id)})
    const trip = await Trip.findOne({id})
    console.log(trip);
    return trip;
}



module.exports = {
    getAllTrips,
    getTrip
}