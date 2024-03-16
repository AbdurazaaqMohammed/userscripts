// ==UserScript==
// @name         Don't Show Me Mods
// @namespace    https://github.com/AbdurazaaqMohammed
// @author       Abdurazaaq Mohammed
// @version      1.0.2
// @description  Remove subreddit moderators information from Old Reddit
// @match        https://old.reddit.com/r/*
// @match        https://np.reddit.com/r/*
// @grant        none
// @homepage     https://github.com/AbdurazaaqMohammed/userscripts
// @license      The Unlicense
// @supportURL   https://github.com/AbdurazaaqMohammed/userscripts/issues
// ==/UserScript==
 
(function() {
    'use strict';
    document.querySelector('.sidecontentbox').remove();
})();
