'use strict';

(function (global) {
    function checkQuality(password) {
        if (password === undefined) {
            return;
        }

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

    var passwordQuality = {
        checkQuality: checkQuality
    };

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = passwordQuality;
    } else if (window) {
        window.passwordQuality = passwordQuality;
    } else {
        global.passwordQuality = passwordQuality;
    }
})(this);
