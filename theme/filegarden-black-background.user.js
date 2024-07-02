// ==UserScript==
// @name           File Garden Black Background
// @namespace      https://github.com/AbdurazaaqMohammed
// @version        1.1.2
// @author         Abdurazaaq Mohammed
// @description    Change background color to AMOLED black on File Garden
// @match          https://filegarden.com/*
// @homepage       https://github.com/AbdurazaaqMohammed/userscripts
// @license        The Unlicense
// @supportURL     https://github.com/AbdurazaaqMohammed/userscripts/issues
// @run-at         document-start
// @grant          none
// ==/UserScript==
(function() {
	'use strict';
  document.head.appendChild(document.createElement('style')).innerHTML = 'div:not(a div) { background-color: black !important; }';
})();
