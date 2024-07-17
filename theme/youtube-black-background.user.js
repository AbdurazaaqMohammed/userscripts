// ==UserScript==
// @name           YouTube Black Background
// @namespace      https://github.com/AbdurazaaqMohammed
// @version        1.6.1
// @author         Abdurazaaq Mohammed
// @description    Change background color to AMOLED black on YouTube
// @match          https://www.youtube.com/*
// @homepage       https://github.com/AbdurazaaqMohammed/userscripts
// @license        The Unlicense
// @supportURL     https://github.com/AbdurazaaqMohammed/userscripts/issues
// @run-at         document-start
// @grant          none
// ==/UserScript==
(function() {
	'use strict';
	document.head.appendChild(document.createElement('style')).innerHTML = 'div:not(button div):not(#container div):not(#dismissible div):not(#shorts-container div):not(.ytd-backstage-items.style-scope div):not(#contentWrapper div):not(#owner div):not(#video-preview div):not(li div):not(#items *):not(#page-manager > ytd-browse > ytd-playlist-header-renderer div), ytd-playlist-panel-renderer div:not(ytd-playlist-panel-video-renderer div), yt-spec-touch-feedback-shape__fill div, #contentWrapper *:not(tp-yt-paper-item):not(tp-yt-paper-item *), #sections, #ytp-id-18, .ytd-rich-metadata-row-renderer *, body > ytd-app > ytd-popup-container > tp-yt-paper-dialog > ytd-voice-search-dialog-renderer, #backstage-post-dialog > ytd-backstage-post-dialog-renderer > div, body > ytd-app > ytd-popup-container > tp-yt-paper-dialog, #header-author *, #content > ytd-mini-guide-renderer, #endpoint, #dismissible div:not(button div):not(#thumbnail div), #header { background-color: black !important; }';
})();
