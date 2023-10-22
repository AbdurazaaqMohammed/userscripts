// ==UserScript==
// @name         Auto Convert after upload on ezgif
// @namespace    https://github.com/fxolan
// @version      1.0
// @author       Abdurazaaq Mohammed
// @description  Automatically clicks the convert button after you upload an image to ezgif to convert
// @match        https://ezgif.com/*/*.*
// @grant        none
// @homepage     https://github.com/fxolan/userscripts
// @license      The Unlicense
// @supportURL   https://github.com/fxolan/userscripts/issues
// ==/UserScript==

//check if the result image is there. The convert button remains after converting so we can't just check for that
function containsImage(element) {
        var images = element.querySelectorAll('img');
        return images.length > 0;
    }

(function() {
    'use strict';

    var form = document.querySelector(".primary.button"); //submit button
    if(form){
      var output = document.querySelector("#output"); //output section
      if(!containsImage(output)){
        form.click();
      }
    }
})();
