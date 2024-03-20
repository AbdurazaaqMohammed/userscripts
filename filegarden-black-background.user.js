// ==UserScript==
// @name           File.Garden Black Background
// @namespace      https://github.com/AbdurazaaqMohammed
// @version        1.1
// @author         Abdurazaaq Mohammed
// @description    Change background color to AMOLED black on File.Garden
// @match          https://filegarden.com/*
// @homepage       https://github.com/AbdurazaaqMohammed/userscripts
// @license        The Unlicense
// @supportURL     https://github.com/AbdurazaaqMohammed/userscripts/issues
// @grant          none
// ==/UserScript==

(function() {
  'use strict';

  const divs = document.querySelectorAll('div');

  divs.forEach(function(div) {
    if (div.id !== '#items > a.item.typeFile.selected') div.style.backgroundColor = 'black';
  });

})();
