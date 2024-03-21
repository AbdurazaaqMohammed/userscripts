// ==UserScript==
// @name           File.Garden Black Background
// @namespace      https://github.com/AbdurazaaqMohammed
// @version        1.1.1
// @author         Abdurazaaq Mohammed
// @description    Change background color to AMOLED black on File.Garden
// @match          https://filegarden.com/*
// @homepage       https://github.com/AbdurazaaqMohammed/userscripts
// @license        The Unlicense
// @supportURL     https://github.com/AbdurazaaqMohammed/userscripts/issues
// @grant          GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  document.querySelectorAll('div').forEach(function(div) {
    div.style.backgroundColor = 'black';
  });

})();
