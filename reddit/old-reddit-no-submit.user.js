// ==UserScript==
// @name         Remove Submit buttons from Old Reddit (with a toggle that activates it when not logged in or always)
// @namespace    https://github.com/fxolan
// @version      1.0
// @match        *://*old.reddit.com/*
// @match        *://*np.reddit.com/*
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @author       Abdurazaaq Mohammed
// @homepage     https://github.com/fxolan/userscripts
// @license      The Unlicense
// @supportURL   https://github.com/fxolan/userscripts/issues
// ==/UserScript==

var onlyOnLogin = GM_getValue("onlyOnLogin", true);

function removeLink(){
  var submitLink = document.querySelector('.submit-link.submit.sidebox > .morelink');
  if (submitLink) {
    submitLink.parentNode.removeChild(submitLink);
  }
}

function removeText(){
  var submitText = document.querySelector('.submit-text.submit.sidebox > .morelink');
  if (submitText) {
    submitText.parentNode.removeChild(submitText);
  }
}

function isLoggedIn(callback){
  GM_xmlhttpRequest({
    method: "GET",
    url: "https://www.reddit.com/api/me.json",
    onload: function(response) {
      if (response.status == 200) {
        callback(true);
      }
      else {
        callback(false);
      }
    }
  });
}

function toggleOnlyOnLogin(){
  onlyOnLogin = !onlyOnLogin;
  GM_setValue("onlyOnLogin", onlyOnLogin);
  updateButtons();
}

function updateButtons(){
  if(onlyOnLogin){
    isLoggedIn(function(loggedIn){
      if (!loggedIn) {
        removeLink();
        removeText();
      }
    });
  }
  else{
    removeLink();
    removeText();
  }
}

(function() {
  'use strict';
  GM_registerMenuCommand("Toggle Only On Login", toggleOnlyOnLogin, "T");
  updateButtons();
})();
