// ==UserScript==
// @name         Don't Show Me Mods
// @namespace    https://github.com/fxolan
// @author       Abdurazaaq Mohammed
// @version      1.0.2
// @description  Remove subreddit moderators information from Old Reddit
// @match        https://old.reddit.com/r/*
// @match        https://np.reddit.com/r/*
// @grant        none
// @homepage     https://github.com/fxolan/userscripts
// @license      The Unlicense
// @supportURL   https://github.com/fxolan/userscripts/issues
// ==/UserScript==
 
(function() {
    'use strict';
    document.querySelector('.sidecontentbox').remove();
})();
