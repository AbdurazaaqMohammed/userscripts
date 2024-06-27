// ==UserScript==
// @name           Old Reddit Black Background
// @namespace      https://github.com/AbdurazaaqMohammed
// @version        1.0
// @author         Abdurazaaq Mohammed
// @description    Change background color to AMOLED black on Old Reddit
// @match          https://old.reddit.com/*
// @match          https://np.reddit.com/*
// @homepage       https://github.com/AbdurazaaqMohammed/userscripts
// @license        The Unlicense
// @supportURL     https://github.com/AbdurazaaqMohammed/userscripts/issues
// @run-at         document-start
// @grant          GM_addStyle
// ==/UserScript==
(function() {
	'use strict';
	try {
		GM_addStyle('div:not(button div) { background-color: black !important; }');
	} catch (e) {
		document.head.appendChild(document.createElement('style')).innerHTML = 'div:not(button div) { background-color: black !important; }';
	}
})();
