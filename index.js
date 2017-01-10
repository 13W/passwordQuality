var dist = './dist/passwordQuality.min.js';
var fs = require('fs');
var path = require('path');
var lib = fs.readFileSync(path.resolve(__dirname, dist), 'utf8');

module.exports = require(dist);
module.exports.middleware = function (req, res) {
    res.end(lib);
};
