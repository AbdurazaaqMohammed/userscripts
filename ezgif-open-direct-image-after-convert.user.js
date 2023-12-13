// ==UserScript==
// @name         Open direct image after converting on Ezgif
// @namespace    https://github.com/fxolan
// @version      1.0
// @description  Open direct link to the image after converting on Ezgif
// @author       Abdurazaaq Mohammed
// @match        https://ezgif.com/*/*.*
// @grant        none
// @homepage     https://github.com/fxolan/userscripts
// @license      The Unlicense
// @supportURL   https://github.com/fxolan/userscripts/issues
// ==/UserScript==

(function() {
  'use strict';

  setInterval(function() {
    const img = document.getElementById('output').getElementsByTagName('img')[0];
    if(img) {
      if (!img.src.endsWith('loadcat.gif')) {
        window.location.href = img.src;
      }
    }
  }, 500)
})();
