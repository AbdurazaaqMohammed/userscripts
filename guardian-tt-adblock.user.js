// ==UserScript==
// @name         Trinidad Guardian AdBlock
// @namespace    https://github.com/AbdurazaaqMohammed
// @version      1.0
// @description  Remove ads on guardian.co.tt
// @author       Abdurazaaq Mohammed
// @homepage     https://github.com/AbdurazaaqMohammed/userscripts
// @supportURL   https://github.com/AbdurazaaqMohammed/userscripts/issues
// @match        https://guardian.co.tt/*
// @match        https://guardian.co.tt/
// @license      The Unlicense
// @grant        none
// @run-at       document-start
// ==/UserScript==
(function() {
  (document.head || document.documentElement).appendChild(document.createElement('style')).textContent = '#ad_position_box, .pa-ad-heading, iframe, #ad_unit, #guardiancott_leaderboard, .side-ads, .spons_ads, .OUTBRAIN, .adsbygoogle { display: none !important; }';
})();
