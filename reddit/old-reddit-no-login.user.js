// ==UserScript==
// @name         Stop Old Reddit asking to login
// @namespace    https://github.com/fxolan
// @author       Abdurazaaq Mohammed
// @version      1.0
// @description  Remove the login fields from Old Reddit
// @match        *://*old.reddit.com/*
// @match        *://*np.reddit.com/*
// @grant        none
// @homepage     https://github.com/fxolan/userscripts
// @license      The Unlicense
// @supportURL   https://github.com/fxolan/userscripts/issues
// ==/UserScript==

(function() {
    'use strict';

    var loginField = document.getElementById('login_login-main');
    if (loginField) {
        loginField.style.display = 'none';
    }

    var wantToJoin = document.getElementsByClassName('user')[0];
    if (wantToJoin) {
        wantToJoin.style.display = 'none';
    }

    var separator = document.querySelector('#header-bottom-right > .separator');
    if (separator) {
        separator.style.display = 'none';
    }
})();
