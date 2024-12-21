// ==UserScript==
// @name         Remove Bing Related Searches
// @namespace    https://github.com/AbdurazaaqMohammed
// @homepage     https://github.com/AbdurazaaqMohammed/userscripts
// @version      1.1.1
// @description  Remove related searches from the sidebar of Bing search pages
// @author       Abdurazaaq Mohammed
// @match        https://*.bing.com/*
// @run-at       document-start
// @grant        none
// @license      The Unlicense
// @supportURL   https://github.com/AbdurazaaqMohammed/userscripts/issues
// ==/UserScript==

(function() {
  'use strict';
  (document.head || document.documentElement).appendChild(document.createElement('style')).textContent = '.richrswrapper { display: none; }';
})();
