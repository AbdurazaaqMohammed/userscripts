// ==UserScript==
// @name        Redirect Mobilism.me to Mobilism.org
// @namespace   https://github.com/fxolan/userscripts
// @version     1.0
// @description Removes unnecessary highlight from Mobilism pages triggered when clicking on a search result to prevent potential issues with external links.
// @match       *://forum.mobilism.me/*
// @grant       none
// @run-at      document-start
// @homepage    https://github.com/fxolan/userscripts
// @license     The Unlicense
// @author      Abdurazaaq Mohammed
// @supportURL  https://github.com/fxolan/userscripts/issues
// ==/UserScript==

(function() {
    'use strict';

    // Get the current URL
    var url = window.location.href;

    // Check if "&hilit" is in the URL
    var me = url.indexOf(".me");


    var org = url.replace(".me", ".org");

    // redirect to .org
    window.location.href = org;
})();
