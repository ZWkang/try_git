// something here
const path = require('path');
const message = require('./config.json');

module.export = {
	resolvePath: function (...args){return path.resolve(args)}
}
