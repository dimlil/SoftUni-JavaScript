const fs = require('fs');
const path = require('path');
const {getCubes} = require('../controllers/database');

// const getAllCubes = () => {
//     // getCubes((cubes) => {
//     //     return JSON.parse(cubes);
//     // })
//     return getCubes();
// }
const getAllCubes = (callback) => {
    getCubes((cubes) => {
        callback(JSON.parse(cubes));
    })
}


module.exports = {
    getAllCubes
}