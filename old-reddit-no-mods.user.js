// ==UserScript==
// @name         Don't Show Me Mods
// @namespace    https://github.com/fxolan
// @author       Abdurazaaq Mohammed
// @version      1.0.1
// @description  Remove subreddit moderators information from Old Reddit
// @match        *://*old.reddit.com/*
// @match        *://*np.reddit.com/*
// @grant        none
// @homepage     https://github.com/fxolan/userscripts
// @license      The Unlicense
// @supportURL   https://github.com/fxolan/userscripts/issues
// ==/UserScript==
 
(function() {
    'use strict';
 
    var modsBox = document.querySelector('.sidecontentbox');
    if (modsBox) {
        modsBox.style.display = 'none';
    }
 
})();
