// ==UserScript==
// @name		   LA Times ByPass
// @namespace	  https://github.com/AbdurazaaqMohammed
// @version		1.0
// @author		 Abdurazaaq Mohammed
// @description	ByPass Paywall on LA Times (No external website)
// @match		  https://*.latimes.com/*
// @homepage	   https://github.com/AbdurazaaqMohammed/userscripts
// @license		The Unlicense
// @supportURL	 https://github.com/AbdurazaaqMohammed/userscripts/issues
// @run-at		 document-start
// @grant		  none
// ==/UserScript==
(function() {
	'use strict';
	(document.head || document.documentElement).appendChild(document.createElement('style')).textContent = "modality-custom-element, .google-dfp-ad-wrapper { display: none !important; } html, body { overflow: auto !important; overflow-y: auto !important; position: static !important; }";
	if(document.cookie.includes('c_tos')) document.cookie = "c_tos=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.latimes.com";
})();
