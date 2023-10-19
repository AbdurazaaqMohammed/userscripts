// ==UserScript==
// @name         No Online Users
// @namespace    https://github.com/fxolan
// @author       Abdurazaaq Mohammed
// @version      1.0
// @description  Remove online users info from Old Reddit
// @match        *://*old.reddit.com/*
// @match        *://*np.reddit.com/*
// @grant        none
// @license      The Unlicense
// @homepage     https://github.com/fxolan/userscripts
// @supportURL   https://github.com/fxolan/userscripts/issues
// ==/UserScript==
 
(function() {
    'use strict';
 
    var subs = document.querySelector('.subscribers');
    if (subs) {
        subs.style.display = 'none';
    }
 
    var online = document.querySelector('.users-online');
    if (online) {
        online.style.display = 'none';
    }
 
})();
