// ==UserScript==
// @name         Reddit AdBlock
// @namespace    https://github.com/AbdurazaaqMohammed
// @version      1.0.1
// @description  Block ads on Reddit (both new and old)
// @author       Abdurazaaq Mohammed
// @homepage     https://github.com/AbdurazaaqMohammed/userscripts
// @supportURL   https://github.com/AbdurazaaqMohammed/userscripts/issues
// @match        https://*.reddit.com/*
// @license      The Unlicense
// @grant        none
// @run-at       document-start
// ==/UserScript==
(function() {
  (document.head || document.documentElement).appendChild(document.createElement('style')).textContent = 'shreddit-ad-post, shreddit-dynamic-ad-link, shreddit-comments-page-ad, div[class*="promotedlink"], .flair { display: none !important; }';
})();
