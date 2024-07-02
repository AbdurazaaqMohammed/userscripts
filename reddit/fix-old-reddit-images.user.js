// ==UserScript==
// @name        Fix image links on Old Reddit
// @namespace   https://github.com/abdurazaaqmohammed
// @version     1.0.3
// @description Fix opening redd.it image links on Old Reddit
// @author      Abdurazaaq Mohammed
// @homepage    https://github.com/abdurazaaqmohammed/userscripts
// @license     The Unlicense
// @supportURL  https://github.com/abdurazaaqmohammed/userscripts/issues
// @match       https://*.reddit.com/*
// @exclude     https://www.reddit.com/*
// @exclude     https://new.reddit.com/*
// @grant       none
// ==/UserScript==

(function () {
  'use strict';
  const url = window.location.href;

  function openImageViewer(imgLink) {
    // Uncomment below and comment/delete the other line if you want to redirect to the image directly instead of opening in a new tab.
    //window.location.href = 'https://abdurazaaqmohammed.github.io/website/imgviewer?viewimg=' + imgLink;
    window.open('https://abdurazaaqmohammed.github.io/website/imgviewer?viewimg=' + imgLink);
  }

  function fixImageLinks(mutationsList, observer) {
    document.querySelectorAll('a[href^="https://preview.redd.it"], a[href^="https://i.redd.it"]').forEach(link => {
      const imgLink = link.href;
      // Overwriting the href would break copying the image link, so remove the old href and set onClick to open the viewer instead.
      link.removeAttribute("href");
      link.addEventListener("click", function() { openImageViewer(imgLink); });
    });
  }

  new MutationObserver(fixImageLinks).observe(document.body, { subtree: true, childList: true });

})();
