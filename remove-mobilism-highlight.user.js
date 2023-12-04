// ==UserScript==
// @name        Remove highlight from Mobilism
// @namespace   https://github.com/fxolan
// @author       Abdurazaaq Mohammed
// @version     1.0.1
// @description Removes unnecessary highlight from Mobilism pages triggered when clicking on a search result to prevent potential issues with external links.
// @match       *://forum.mobilism.org/viewtopic.php?f=*
// @match       *://forum.mobilism.me/viewtopic.php?f=*
// @grant       none
// @run-at      document-start
// @homepage    https://github.com/fxolan/userscripts
// @supportURL  https://github.com/fxolan/userscripts/issues
// @license      The Unlicense
// ==/UserScript==

(function() {
  'use strict';

  const url = window.location.href;

  const index = url.indexOf("&hilit");

  if (index > -1) window.location.href = url.substring(0, index);
})();
