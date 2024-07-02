// ==UserScript==
// @name           Old Reddit Black Background
// @namespace      https://github.com/AbdurazaaqMohammed
// @version        1.1
// @author         Abdurazaaq Mohammed
// @description    Change background color to AMOLED black on Old Reddit
// @match          https://old.reddit.com/*
// @match          https://np.reddit.com/*
// @homepage       https://github.com/AbdurazaaqMohammed/userscripts
// @license        The Unlicense
// @supportURL     https://github.com/AbdurazaaqMohammed/userscripts/issues
// @run-at         document-start
// @grant          none
// ==/UserScript==
(function() {
	'use strict';

  document.head.appendChild(document.createElement('style')).innerHTML = 'div:not(button div):not(#video-' + window.location.href.match(/\/comments\/(\w+)\//)[1] +' div) { background-color: black !important; }';
})();
