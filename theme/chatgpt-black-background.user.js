// ==UserScript==
// @name           ChatGPT Black Background
// @namespace      https://github.com/AbdurazaaqMohammed
// @version        1.1
// @author         Abdurazaaq Mohammed
// @description    Change background color to AMOLED black on ChatGPT
// @match          https://chatgpt.com/*
// @homepage       https://github.com/AbdurazaaqMohammed/userscripts
// @supportURL     https://github.com/AbdurazaaqMohammed/userscripts/issues
// @license        The Unlicense
// @run-at         document-start
// @grant          GM_addStyle
// ==/UserScript==
(function() {
	'use strict';
  const myCSS = '[class*="gradient"] { display: none; } div:not(button div):not(.flex-col.flex-1.transition-opacity.duration-500.relative.-mr-2.pr-2.overflow-y-auto div), div.sticky.bg-token-sidebar-surface-primary.top-0.z-20 { background-color: black !important; color: white !important; }';

	if (typeof GM_addStyle != "undefined") GM_addStyle(myCSS);
  else if (typeof PRO_addStyle != "undefined") PRO_addStyle(myCSS);
  else if (typeof addStyle != "undefined") addStyle(myCSS);
	else {
		var node = document.createElement("style"); node.type = "text/css"; node.appendChild(document.createTextNode(myCSS));
		var heads = document.getElementsByTagName("head");
		heads.length > 0 ? heads[0].appendChild(node) ? (document.documentElement) : document.documentElement.appendChild(node) : new MutationObserver(function () { if (document.documentElement) { obs.disconnect(); document.documentElement.appendChild(node); } }).observe(document, {childList: true});
	}
})();
