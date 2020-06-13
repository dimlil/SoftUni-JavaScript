const Cube = require('../models/cube');

const newCube = new Cube('Default', 'this is default cube', 'https://google.com', 1);


newCube.save();