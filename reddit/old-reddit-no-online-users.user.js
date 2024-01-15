// ==UserScript==
// @name         No Online Users
// @namespace    https://github.com/fxolan
// @author       Abdurazaaq Mohammed
// @version      1.0.1
// @description  Remove online users info from Old Reddit
// @match        https://old.reddit.com/r/*
// @match        https://np.reddit.com/r/*
// @grant        none
// @license      The Unlicense
// @homepage     https://github.com/fxolan/userscripts
// @supportURL   https://github.com/fxolan/userscripts/issues
// ==/UserScript==
 
(function() {
    'use strict';
    document.querySelector('.subscribers').remove();
    document.querySelector('.users-online').remove();
})();
