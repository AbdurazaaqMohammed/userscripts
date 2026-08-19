// ==UserScript==
// @name		   BusinessInsider PayWall ByPass
// @namespace	  https://github.com/AbdurazaaqMohammed
// @version		1.0
// @author		 Abdurazaaq Mohammed
// @description	ByPass BusinessInsider PayWall (No external website)
// @match		  https://*.businessinsider.com/*
// @homepage	   https://github.com/AbdurazaaqMohammed/userscripts
// @license		The Unlicense
// @supportURL	 https://github.com/AbdurazaaqMohammed/userscripts/issues
// @run-at		 document-start
// @grant		  none
// ==/UserScript==
(function() {
	'use strict';
  (document.head || document.documentElement).appendChild(document.createElement('style')).textContent = "[class^='ad-'], [class^='l-ad'], .pw-modal-entry.pw-active, .in-post-sticky.only-desktop, #desktop-paywall-drawer-entry, [id*='paywall'], [class*='paywall'], .masthead-ad, .post-recommended-video { display: none !important; }";
  if(window.location.pathname !== "/") for (const d of document.querySelectorAll('[data-load-strategy]')) d.setAttribute("data-load-strategy", "exclude");
})();
