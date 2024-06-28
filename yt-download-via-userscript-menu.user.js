// ==UserScript==
// @name        Download video/audio from YouTube quickly via userscript menu
// @namespace   https://github.com/AbdurazaaqMohammed/userscripts
// @version     1.1.1
// @description Adds buttons in userscript manager on YouTube videos to download video (from ytbsave.com) or audio (from tube-nightly.kuylar.dev through poketube)
// @match       https://ytbsave.com/en/youtube-to-mp4/*
// @match       https://www.youtube.com/*
// @exclude     https://www.youtube.com/feed/*
// @exclude     https://www.youtube.com/channel/*
// @grant       GM_registerMenuCommand
// @grant       GM_setValue
// @grant       GM_getValue
// @homepage    https://github.com/AbdurazaaqMohammed/userscripts
// @license     The Unlicense
// @supportURL  https://github.com/AbdurazaaqMohammed/userscripts/issues
// ==/UserScript==
 
(function() {
  'use strict';
 
  function overrideTimeout() {
    const originalSetTimeout = window.setTimeout;
    window.setTimeout = function(callback, delay) {
      return originalSetTimeout(callback, 1);
    };
  }
 
  function dlV() {
    window.open('https://ytbsave.com/en/youtube-to-mp4/' + window.location.href, '_blank').focus();
  }
 
  function dlA() {
    window.location.href = ('https://poketube.fun/api/video/download?v=' + window.location.href.split('v=')[1] + '&q=251&f=webm');
  }
 
  if(window.location.href.startsWith('https://ytbsave.com/en/youtube-to-mp4/')) {
    overrideTimeout();
    const intervalId = setInterval(function() {
      document.querySelector('#mp4 > table > tbody > tr:nth-child(4) > td.text-center > button').click(); // highest quality video
      const s = document.querySelector(".text-center.form-group > .btn-success.btn");
      if(s) {
        clearInterval(intervalId);
        const bruh = setInterval(function() {
          // When the button first appear the href is the current url for some reason need to wait for it to load the download url
          if(!s.href.startsWith('https://ytbsave.com/')) {
            window.location.href = s.href;
            clearInterval(bruh);
          }
        }, 500);
      }
    }, 500);
  } else {
    GM_registerMenuCommand('Download Video', dlV);
    GM_registerMenuCommand('Download Audio', dlA);
  }
})();
