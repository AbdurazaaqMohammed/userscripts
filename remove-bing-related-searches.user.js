// ==UserScript==
// @name         Remove Bing Related Searches
// @namespace    https://github.com/AbdurazaaqMohammed
// @homepage     https://github.com/AbdurazaaqMohammed/userscripts
// @version      1.1
// @description  Remove related searches from the sidebar of Bing search pages
// @author       Abdurazaaq Mohammed
// @match        https://*.bing.com/*
// @run-at       document-start
// @grant        GM_addStyle
// @license      The Unlicense
// @supportURL   https://github.com/AbdurazaaqMohammed/userscripts/issues
// ==/UserScript==

(function() {
    'use strict';
    const myCSS = '.richrswrapper { display: none; }';

    if (typeof GM_addStyle != "undefined") GM_addStyle(myCSS);
    else if (typeof PRO_addStyle != "undefined") PRO_addStyle(myCSS);
    else if (typeof addStyle != "undefined") addStyle(myCSS);
    else {
		var node = document.createElement("style"); node.type = "text/css"; node.appendChild(document.createTextNode(myCSS));
		var heads = document.getElementsByTagName("head");
		heads.length > 0 ? heads[0].appendChild(node) ? (document.documentElement) : document.documentElement.appendChild(node) : new MutationObserver(function () { if (document.documentElement) { obs.disconnect(); document.documentElement.appendChild(node); } }).observe(document, {childList: true});
	}
})();
