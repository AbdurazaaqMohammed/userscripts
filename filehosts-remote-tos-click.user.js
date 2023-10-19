// ==UserScript==
// @name         Auto Remote Upload + ToS
// @namespace    https://github.com/fxolan
// @version      1.0
// @description  Automatically selects remote URL upload and ticks the TOS box on UserUpload
// @author       Abdurazaaq Mohammed
// @match        *://dropggalaxy.*/?op=upload_form
// @match        *://devuploads.com/?op=upload_form
// @match        *://userupload.*/?op=upload_form
// @grant        none
// @homepage     https://github.com/fxolan/userscripts
// @license      The Unlicense
// @supportURL   https://github.com/fxolan/userscripts/issues
// ==/UserScript==

(function() {
    'use strict';

    // Click on Remote Upload
    var form = document.querySelector("#select_url");
    form.click();
  
  //  if (window.location.href.includes('userupload')) {//devuploads and uploadrar already enables this by default. I can't remember about DG
      // Click on Accept TOS
      var checkbox = document.querySelector(".custom-control-label");
      checkbox.click();
   // }
})();
