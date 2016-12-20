'use strict';

var assert = require('assert');
var passwordQuality = require('../index.js');

var PASSWORDS = {
    weak: ['Test', 'Test_', 'Tst1234', 'TEST', 'test', 'test12345', 'ttttt123', '1!2@3#', '1234!@#$'],
    medium: ['Test123', 'Test1234!', 'TEST123!@', 'T!e@s#t$', 'test576)(', 'ttttT567!@#', 'test_1V'],
    strong: ['Test123!', 'TEST_123_!@#_test', 'Testtt123!']
};
var QUALITY = ['Weak', 'Medium', 'Strong'];

describe('passwordQuality', function () {
    QUALITY.forEach(function (quality) {
        describe('password quality must be \'' + quality + '\'', function () {
            PASSWORDS[quality.toLowerCase()].forEach(function (password) {
                it('Tested password \'' + password + '\'', function (done) {
                    var currentQuality = passwordQuality.checkQuality(password);
                    assert.strictEqual(currentQuality, quality);

                    done();
                })
            });
        });
    });
});
