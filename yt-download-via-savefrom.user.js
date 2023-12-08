// ==UserScript==
// @name        Download video/audio from YouTube quickly via SaveFrom
// @namespace   https://github.com/fxolan/userscripts
// @version     1.0
// @description Adds buttons in userscript manager on YouTube videos to go to SaveFrom and get video or audio, and automatically selects and downloads the highest quality video/audio on SaveFrom links
// @match       https://en.savefrom.net/*
// @match       https://www.youtube.com/*
// @exclude     https://www.youtube.com/feed/*
// @exclude     https://www.youtube.com/channel/*
// @grant       GM_registerMenuCommand
// @homepage    https://github.com/fxolan/userscripts
// @license     The Unlicense
// @supportURL  https://github.com/fxolan/userscripts/issues
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

    let highestQuality = 0;
    let highestQualityLink = null;

    // Iterate through the video download links
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      const words = link.innerText.split(" ");
      const lastWord = words.pop();
      if(localStorage.getItem('format')) {
        if(link.innerText.startsWith('MP4')) {
          if (parseInt(lastWord) > highestQuality) {
            highestQuality = parseInt(lastWord);
            highestQualityLink = link;
           }
        }
      }
      else {
        if(link.innerText.startsWith('Audio')) {
          if (parseInt(lastWord) > highestQuality) {
            highestQuality = parseInt(lastWord);
            highestQualityLink = link;
          }
        }
      }
    }
    highestQualityLink.click();
  }

  function dlV() {
    window.open(saveF + url, '_blank').focus();
  }

  function dlA() {
    localStorage.setItem('format', 'false');
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
    localStorage.setItem('format', true);
    GM_registerMenuCommand('Download Video', dlV);
	  GM_registerMenuCommand('Download Audio', dlA);
  }

})();
