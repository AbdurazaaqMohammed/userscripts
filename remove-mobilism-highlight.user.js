// ==UserScript==
// @name        Remove highlight from Mobilism
// @namespace   https://github.com/fxolan
// @author       Abdurazaaq Mohammed
// @version     1.0
// @description Removes unnecessary highlight from Mobilism pages triggered when clicking on a search result to prevent potential issues with external links.
// @match       *://forum.mobilism.org/viewtopic.php?f=*
// @match       *://forum.mobilism.me/viewtopic.php?f=*
// @grant       none
// @run-at      document-start
// @homepage    https://github.com/fxolan/userscripts
// @supportURL  https://github.com/fxolan/userscripts/issues
// @license      The Unlicense
// ==/UserScript==

(function() {
    'use strict';

    // Get the current URL
    var url = window.location.href;

    // Check if "&hilit" is in the URL
    var index = url.indexOf("&hilit");

    // If it is, remove it and any text after it
    if (index > -1) {
        var urlWithoutHighlight = url.substring(0, index);

        // redirect to URL without highlight
        window.location.href = urlWithoutHighlight;
    }
})();
