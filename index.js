var passwordQuality = require('./dist/passwordQuality.min.js');
var passwordQualityString = require('fs').readFileSync(__dirname + '/dist/passwordQuality.min.js', 'utf8');

passwordQuality.middleware = function (options) {
    var url = require('url');

    options = options || {};
    options.path = options.path || '/password-quality';

    return function (req, res, next) {
        if (url.parse(req.url).pathname !== options.path) {
            return next();
        }

        res.end(passwordQualityString)
    }
};

module.exports = passwordQuality;
