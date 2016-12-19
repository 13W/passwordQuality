(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function passwordQuality(password) {
    var PASSWORD_QUALITY = ['Weak', 'Weak', 'Weak', 'Medium', 'Medium', 'Strong'];
    var quality = '';
    var strength = -1;

    function hasSequence(password) {
        for (var index = 0; index < password.length; index += 1) {
            if (password[index + 3] &&
                String.fromCharCode(password.charCodeAt(index) + 1) == password[index + 1] &&
                String.fromCharCode(password.charCodeAt(index) + 2) == password[index + 2] &&
                String.fromCharCode(password.charCodeAt(index) + 3) == password[index + 3]) {
                return true;
            }
        }
        return false;
    }

    if (password === undefined) {
        return;
    }

    if (password.length >= 8) {
        strength += 1;
    }
    if (password.match(/^(?=.*[a-z])/)) {
        strength += 1;
    }
    if (password.match(/^(?=.*[A-Z])/)) {
        strength += 1;
    }
    if (password.match(/^(?=.*[0-9])/)) {
        strength += 1;
    }
    if (password.match(/^(?=.*[~!@#$%\^&*()+\-?])/)) {
        strength += 1;
    }
    if (!password.match(/(\S)\1{3,}/gm) && !hasSequence(password)) {
        strength += 1;
    }

    if (strength > -1) {
        quality = PASSWORD_QUALITY[strength];
    }

    return quality;
}

module.exports = passwordQuality;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHBhc3N3b3JkUXVhbGl0eShwYXNzd29yZCkge1xuICAgIHZhciBQQVNTV09SRF9RVUFMSVRZID0gWydXZWFrJywgJ1dlYWsnLCAnV2VhaycsICdNZWRpdW0nLCAnTWVkaXVtJywgJ1N0cm9uZyddO1xuICAgIHZhciBxdWFsaXR5ID0gJyc7XG4gICAgdmFyIHN0cmVuZ3RoID0gLTE7XG5cbiAgICBmdW5jdGlvbiBoYXNTZXF1ZW5jZShwYXNzd29yZCkge1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgcGFzc3dvcmQubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICAgICAgICBpZiAocGFzc3dvcmRbaW5kZXggKyAzXSAmJlxuICAgICAgICAgICAgICAgIFN0cmluZy5mcm9tQ2hhckNvZGUocGFzc3dvcmQuY2hhckNvZGVBdChpbmRleCkgKyAxKSA9PSBwYXNzd29yZFtpbmRleCArIDFdICYmXG4gICAgICAgICAgICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShwYXNzd29yZC5jaGFyQ29kZUF0KGluZGV4KSArIDIpID09IHBhc3N3b3JkW2luZGV4ICsgMl0gJiZcbiAgICAgICAgICAgICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhc3N3b3JkLmNoYXJDb2RlQXQoaW5kZXgpICsgMykgPT0gcGFzc3dvcmRbaW5kZXggKyAzXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAocGFzc3dvcmQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHBhc3N3b3JkLmxlbmd0aCA+PSA4KSB7XG4gICAgICAgIHN0cmVuZ3RoICs9IDE7XG4gICAgfVxuICAgIGlmIChwYXNzd29yZC5tYXRjaCgvXig/PS4qW2Etel0pLykpIHtcbiAgICAgICAgc3RyZW5ndGggKz0gMTtcbiAgICB9XG4gICAgaWYgKHBhc3N3b3JkLm1hdGNoKC9eKD89LipbQS1aXSkvKSkge1xuICAgICAgICBzdHJlbmd0aCArPSAxO1xuICAgIH1cbiAgICBpZiAocGFzc3dvcmQubWF0Y2goL14oPz0uKlswLTldKS8pKSB7XG4gICAgICAgIHN0cmVuZ3RoICs9IDE7XG4gICAgfVxuICAgIGlmIChwYXNzd29yZC5tYXRjaCgvXig/PS4qW34hQCMkJVxcXiYqKCkrXFwtP10pLykpIHtcbiAgICAgICAgc3RyZW5ndGggKz0gMTtcbiAgICB9XG4gICAgaWYgKCFwYXNzd29yZC5tYXRjaCgvKFxcUylcXDF7Myx9L2dtKSAmJiAhaGFzU2VxdWVuY2UocGFzc3dvcmQpKSB7XG4gICAgICAgIHN0cmVuZ3RoICs9IDE7XG4gICAgfVxuXG4gICAgaWYgKHN0cmVuZ3RoID4gLTEpIHtcbiAgICAgICAgcXVhbGl0eSA9IFBBU1NXT1JEX1FVQUxJVFlbc3RyZW5ndGhdO1xuICAgIH1cblxuICAgIHJldHVybiBxdWFsaXR5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhc3N3b3JkUXVhbGl0eTtcbiJdfQ==
