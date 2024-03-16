// ==UserScript==
// @name        Play Store Images to PNG
// @namespace   https://github.com/AbdurazaaqMohammed/userscripts
// @author      Abdurazaaq Mohammed
// @version     1.0.1
// @description Redirect Google Play Store images to ezgif webp to png converter.
// @match       *://play-lh.googleusercontent.com/*
// @grant       none
// @run-at      document-start
// @homepage    https://github.com/AbdurazaaqMohammed/userscripts
// @license     The Unlicense
// @supportURL  https://github.com/AbdurazaaqMohammed/userscripts/issues
// ==/UserScript==

(function() {
  'use strict';
  window.location.href = "https://ezgif.com/webp-to-png?url=" + window.location.href;
})();
