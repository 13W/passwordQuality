var passwordQuality = require('./dist/passwordQuality.min.js');
var passwordQualityString = require('fs').readFileSync(__dirname + '/dist/passwordQuality.min.js', 'utf8');

passwordQuality.toString = function() {
    return passwordQualityString;
};

module.exports = passwordQuality;
