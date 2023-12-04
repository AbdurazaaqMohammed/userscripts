// ==UserScript==
// @name        A2ZAPK Quick Download
// @namespace   https://github.com/fxolan/userscripts
// @version     1.0
// @description Redirect to download page when you click an app on A2ZAPK
// @match       *://a2zapk.*/1*
// @match       *://a2zapk.*/dload/*
// @grant       none
// @run-at      document-start
// @homepage    https://github.com/fxolan/userscripts
// @license     The Unlicense
// @supportURL  https://github.com/fxolan/userscripts/issues
// ==/UserScript==

(function() {
  'use strict';
  const url = window.location.href;

  function overrideTimeout() {
    const originalSetTimeout = window.setTimeout;
    window.setTimeout = function(callback, delay) {
      return originalSetTimeout(callback, 1);
    };
  }

  if (url.includes("dload")) {
    if (url.endsWith("file/")) { // direct download page
      const intervalId = setInterval(function() { // the download still takes some time to load. I used setInterval instead of setTimeout because it depends on your internet speed.
        if(document.querySelector("#dll").innerText != "Loading.."){
          window.location.href = $('#dll').attr('href');
          clearInterval(intervalId);
        }
      }, 200);
      overrideTimeout()
    } else { // the page with all the download links
      setInterval(function() {
        document.querySelector("#apkdl").click(); // I couldn't find a better way of bypassing this. it uses some weird vars; you can't just add /file/ to the url
      }, 500);
      overrideTimeout()
    }
  } else {
    window.location.href = "https://a2zapk.io/dload/" + url.split("-")[0].split("https://a2zapk.io/")[1] + "/"; // redirect to the page with all the download links
  }
})();
