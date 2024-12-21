// ==UserScript==
// @name           Old Reddit Black Background
// @namespace      https://github.com/AbdurazaaqMohammed
// @version        1.1.3
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

	(document.head || document.documentElement).appendChild(document.createElement('style')).textContent = 'div:not(button div):not(.reddit-video-player-root.portrait div) { background-color: black !important; }';
})();
