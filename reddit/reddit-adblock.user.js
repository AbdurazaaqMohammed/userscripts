// ==UserScript==
// @name         Reddit AdBlock
// @namespace    https://github.com/AbdurazaaqMohammed
// @version      1.1.0
// @description  Remove ads display and forced login on Reddit
// @author       Abdurazaaq Mohammed
// @homepage     https://github.com/AbdurazaaqMohammed/userscripts
// @supportURL   https://github.com/AbdurazaaqMohammed/userscripts/issues
// @match        https://*.reddit.com/*
// @license      The Unlicense
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
	'use strict';

	(document.head || document.documentElement).appendChild(document.createElement('style')).textContent = 'html, body { overflow: auto !important; overflow-y: auto !important; position: static !important; } body > div[style*="filter"], body > div[style*="blur"] { filter: none !important; } shreddit-ad-post, shreddit-dynamic-ad-link, shreddit-comments-page-ad, shreddit-comment-tree-ad, div[class*="promotedlink"], #app-upsell-blocking-bottom-sheet-seo, #app-upsell-blocking-bottom-sheet-direct, [id*="app-upsell-blocking"], .XPromoBlockingModal, .XPromoPopup, .XPromoPopupRpl, .configured-xpromo, configured-xpromo-modal, xpromo-nsfw-blocking-modal, [class*="nsfw-blocking"], [class*="xpromo"], [class*="blocking-modal"], [id*="blocking-modal"], [data-testid="app-upsell"], body > div[style*="position: fixed"][style*="z-index"], body > div[style*="position:fixed"][style*="z-index"] { display: none !important; }';
})();
