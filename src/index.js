// something here
const path = require('path');
const message = require('./config.json');


console.log(path.resolve(`${message.age}`));