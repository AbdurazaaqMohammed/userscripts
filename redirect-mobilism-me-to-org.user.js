// ==UserScript==
// @name        Redirect Mobilism.me to Mobilism.org
// @namespace   https://github.com/AbdurazaaqMohammed/userscripts
// @version     1.0
// @description Redirect Mobilism.me to Mobilism.org so I don't have to log in on both
// @match       *://forum.mobilism.me/*
// @grant       none
// @run-at      document-start
// @homepage    https://github.com/AbdurazaaqMohammed/userscripts
// @license     The Unlicense
// @author      Abdurazaaq Mohammed
// @supportURL  https://github.com/AbdurazaaqMohammed/userscripts/issues
// ==/UserScript==

(function() {
    'use strict';
    
    window.location.href = window.location.href.replace(".me", ".org");
})();
