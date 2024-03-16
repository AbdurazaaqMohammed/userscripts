// ==UserScript==
// @name         Auto Remote Upload + ToS
// @namespace    https://github.com/AbdurazaaqMohammed
// @version      1.1
// @description  Automatically selects remote URL upload and ticks the TOS box on file hosting sites often used on Mobilism
// @author       Abdurazaaq Mohammed
// @match        https://userupload.net/?op=upload_form
// @match        https://userupload.in/?op=upload_form
// @match        https://uploadrar.com/
// @match        https://devuploads.com/upload
// @match        https://dropgalaxy.vip/
// @match        https://dropgalaxy.co/
// @match        https://dropgalaxy.com/
// @match        https://dgdrive.xyz/
// @match        https://apkadmin.com/
// @grant        none
// @homepage     https://github.com/AbdurazaaqMohammed/userscripts
// @license      The Unlicense
// @supportURL   https://github.com/AbdurazaaqMohammed/userscripts/issues
// ==/UserScript==

(function() {
  'use strict';

  const url = window.location.href;
  const inputField = document.querySelector("textarea");
  setTimeout(function() { // auto focus the input field
      if(inputField && document.activeElement !== inputField){
        inputField.focus();
      }
    }, 500);

  if (url.includes('dropgalaxy') || url.includes('dgdrive')) {
    document.querySelector("#tab-remote_upload > span").click();
  }
  else if (url.includes('userupload')) {
    document.querySelector("#select_url").click();
    document.querySelector(".custom-control-label").click(); //devuploads and uploadrar already enable TOS by default. I can't remember about DG
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
