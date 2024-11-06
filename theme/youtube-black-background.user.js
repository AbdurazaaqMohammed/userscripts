// ==UserScript==
// @name		   YouTube Black Background
// @namespace	  https://github.com/AbdurazaaqMohammed
// @version		1.7.2.2
// @author		 Abdurazaaq Mohammed
// @description	Change background color to AMOLED black on YouTube
// @match		  https://www.youtube.com/*
// @homepage	   https://github.com/AbdurazaaqMohammed/userscripts
// @license		The Unlicense
// @supportURL	 https://github.com/AbdurazaaqMohammed/userscripts/issues
// @run-at		 document-start
// @grant		  GM_addStyle
// ==/UserScript==
(function() {
	'use strict';
	const myCSS = '* { color: white !important; } ytd-app, div:not(button div):not(#page-header > yt-page-header-renderer > yt-page-header-view-model > div > div.page-header-view-model-wiz__page-header-headline > yt-decorated-avatar-view-model > yt-avatar-shape div):not(ytd-shorts div):not(#container div):not(#dismissible div):not(.ytd-backstage-items.style-scope div):not(#contentWrapper div):not(#owner div):not(#video-preview div):not(li div):not(#items *):not(#page-manager > ytd-browse > ytd-playlist-header-renderer div), ytd-playlist-panel-renderer div:not(ytd-playlist-panel-video-renderer div), yt-spec-touch-feedback-shape__fill div, #contentWrapper *:not(tp-yt-paper-item):not(tp-yt-paper-item *), #sections, #ytp-id-18, .ytd-rich-metadata-row-renderer *, body > ytd-app > ytd-popup-container > tp-yt-paper-dialog > ytd-voice-search-dialog-renderer, #backstage-post-dialog > ytd-backstage-post-dialog-renderer > div, body > ytd-app > ytd-popup-container > tp-yt-paper-dialog, #header-author *, #content > ytd-mini-guide-renderer, #endpoint, #dismissible div:not(button div):not(#thumbnail div):not(.yt-spec-avatar-shape__image-overlays):not(.yt-spec-avatar-shape__image), #header, #page-manager > ytd-shorts > div.navigation-container.style-scope.ytd-shorts, #teaser-carousel > yt-video-metadata-carousel-view-model, yt-chip-cloud-chip-renderer { background-color: black !important; };';

	if (typeof GM_addStyle != "undefined") GM_addStyle(myCSS);
  else if (typeof PRO_addStyle != "undefined") PRO_addStyle(myCSS);
  else if (typeof addStyle != "undefined") addStyle(myCSS);
	else {
		var node = document.createElement("style"); node.type = "text/css"; node.appendChild(document.createTextNode(myCSS));
		var heads = document.getElementsByTagName("head");
		heads.length > 0 ? heads[0].appendChild(node) ? (document.documentElement) : document.documentElement.appendChild(node) : new MutationObserver(function () { if (document.documentElement) { obs.disconnect(); document.documentElement.appendChild(node); } }).observe(document, {childList: true});
	}
})();
