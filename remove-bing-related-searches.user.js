// ==UserScript==
// @name         Remove Bing Related Searches
// @namespace    https://github.com/AbdurazaaqMohammed
// @homepage     https://github.com/AbdurazaaqMohammed/userscripts
// @version      1.0
// @description  Remove related searches from the sidebar of Bing search pages
// @author       Abdurazaaq Mohammed
// @match        *://*bing.com/*
// @grant        none
// @license      The Unlicense
// @supportURL   https://github.com/AbdurazaaqMohammed/userscripts/issues
// ==/UserScript==

(function() {
    'use strict';

    var relatedSearches = document.querySelector('.richrswrapper');

    if (relatedSearches) {
        relatedSearches.remove();
    }
})();
