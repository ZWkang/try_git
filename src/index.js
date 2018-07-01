// something here
const path = require('path');
const message = require('./config.json');

console.log(path.resolve('.'))

console.log(path.resolve(`${message.age}`));
console.log(path.resolve(__dirname,`${message.age} \n`),`Author: ${message.name}`);
