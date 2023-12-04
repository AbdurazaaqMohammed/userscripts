// ==UserScript==
// @name         Auto Convert after upload on ezgif
// @namespace    https://github.com/fxolan
// @version      1.0.1
// @author       Abdurazaaq Mohammed
// @description  Automatically clicks the convert button after you upload an image to ezgif to convert
// @match        https://ezgif.com/*/*.*
// @grant        none
// @homepage     https://github.com/fxolan/userscripts
// @license      The Unlicense
// @supportURL   https://github.com/fxolan/userscripts/issues
// ==/UserScript==

(function() {
  'use strict';

  const form = document.querySelector(".primary.button"); //submit button
  if(form) {
    if(!document.querySelector("#output").querySelector('img')) { //check if the result image is there. The convert button remains after converting so we can't just check for that
      form.click();
    }
  }
})();
