// ==UserScript==
// @name         Mobilism Images Click Remote Upload
// @namespace    https://github.com/fxolan
// @version      1.0
// @description  Automatically selects remote URL upload on Mobilism Images Uploader
// @match        *://images.mobilism.org/
// @grant        none
// @author       Abdurazaaq Mohammed
// @homepage     https://github.com/fxolan/UserScripts
// @license      The Unlicense
// @supportURL   https://github.com/fxolan/UserScripts/issues
// ==/UserScript==

    // Click on Remote Upload
    var remoteButton = document.querySelector(".linkremote");
    if(remoteButton){
      remoteButton.click();
    }
