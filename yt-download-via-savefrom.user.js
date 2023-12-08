// ==UserScript==
// @name        Download video/audio from YouTube quickly via SaveFrom
// @namespace   https://github.com/fxolan/userscripts
// @version     1.0.1
// @description Adds buttons in userscript manager on YouTube videos to go to SaveFrom and get video or audio, and automatically selects and downloads the highest quality video/audio on SaveFrom links
// @match       https://en.savefrom.net/*
// @match       https://www.youtube.com/*
// @exclude     https://www.youtube.com/feed/*
// @exclude     https://www.youtube.com/channel/*
// @grant       GM_registerMenuCommand
// @grant       GM_setValue
// @grant       GM_getValue
// @homepage    https://github.com/fxolan/userscripts
// @license     The Unlicense
// @supportURL  https://github.com/fxolan/userscripts/issues
// @downloadURL https://update.greasyfork.org/scripts/481649/Download%20videoaudio%20from%20YouTube%20quickly%20via%20SaveFrom.user.js
// @updateURL https://update.greasyfork.org/scripts/481649/Download%20videoaudio%20from%20YouTube%20quickly%20via%20SaveFrom.meta.js
// ==/UserScript==

(function() {
  'use strict';
  const url = window.location.href;
  const saveF = 'https://en.savefrom.net/';

  function overrideTimeout() {
    const originalSetTimeout = window.setTimeout;
    window.setTimeout = function(callback, delay) {
      return originalSetTimeout(callback, 1);
    };
  }

  function getHighestQuality() {
    // Get all the video download links on the page
    const links = document.querySelectorAll('.main > div.link-group > .ga_track_events.subname.link-download.link');
    const format = GM_getValue('format') ? 'MP4' : 'Audio';

    // Iterate through the video download links
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      if(link.innerText.startsWith(format)) { //actually the links are already sorted in order of quality
        link.click();
        break;
      }
    }

    set = setInterval(function() { //close the tab after a few seconds. if your browser opens the download in an inbuilt video/audio player this should not close it.
      window.close();
      clearInterval(set);
    }, 2000);
  }

  function dlV() {
    GM_setValue('format', true);
    window.open(saveF + url, '_blank').focus();
  }

  function dlA() {
    GM_setValue('format', false);
    window.open(saveF + url, '_blank').focus();
  }

  if(url.startsWith(saveF)) {
    overrideTimeout();
    const intervalId = setInterval(function() {
      if (document.querySelector('.links')) {
        clearInterval(intervalId);
        getHighestQuality();
      }
    }, 200);
  } else {
    GM_registerMenuCommand('Download Video', dlV);
    GM_registerMenuCommand('Download Audio', dlA);
  }
})();
