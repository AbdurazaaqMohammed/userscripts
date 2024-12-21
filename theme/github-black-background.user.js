// ==UserScript==
// @name           GitHub Black Background
// @namespace      https://github.com/AbdurazaaqMohammed
// @version        1.0.1
// @author         Abdurazaaq Mohammed
// @description    Change background color to AMOLED black on GitHub
// @match          https://github.com/*
// @homepage       https://github.com/AbdurazaaqMohammed/userscripts
// @license        The Unlicense
// @supportURL     https://github.com/AbdurazaaqMohammed/userscripts/issues
// @run-at         document-start
// @grant          none
// ==/UserScript==
(function() {
	'use strict';
	(document.head || document.documentElement).appendChild(document.createElement('style')).textContent = 'div:not(button div) { background-color: black !important; }';
})();
