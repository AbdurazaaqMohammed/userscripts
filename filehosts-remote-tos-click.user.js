// ==UserScript==
// @name         Auto Remote Upload + ToS
// @namespace    https://github.com/fxolan
// @version      1.0
// @description  Automatically selects remote URL upload and ticks the TOS box on file hosting sites often used on Mobilism
// @author       Abdurazaaq Mohammed
// @match        *://userupload.*/?op=upload_form
// @match        *://uploadrar.com/
// @match        *://devuploads.com/upload
// @match        *://dropgalaxy.*/
// @match        *://dgdrive.xyz/
// @grant        none
// @homepage     https://github.com/fxolan/userscripts
// @license      The Unlicense
// @supportURL   https://github.com/fxolan/userscripts/issues
// ==/UserScript==

(function() {
  'use strict';

  const url = window.location.href;

  if (url.includes('dropgalaxy') || url.includes('dgdrive')) {
    document.querySelector("#tab-remote_upload > span").click();
  }
  else if (url.includes('userupload')) {
    document.querySelector("#select_url").click();
    document.querySelector(".custom-control-label").click();//devuploads and uploadrar already enables TOS by default. I can't remember about DG
  }
  else {
    const form = document.querySelector("#select_url");
    const intervalId = setInterval(function() { //uploadrar refuses to work if you don't do this
      if(form) {
        form.click();
        clearInterval(intervalId);
      }
    }, 200);
  }
})();
