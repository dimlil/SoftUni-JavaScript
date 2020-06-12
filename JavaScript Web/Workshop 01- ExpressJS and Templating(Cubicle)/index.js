const env = process.env.NODE_ENV || 'development';
//export process.env.NODE_ENV="production" in terminal after finish project

const config = require('./config/config')[env];
const app = require('express')();

require('./config/express')(app);
require('./config/routes')(app);

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));