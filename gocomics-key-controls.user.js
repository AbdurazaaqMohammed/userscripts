// ==UserScript==
// @name         GoComics control with arrow keys
// @namespace    https://github.com/fxolan/userscripts
// @version      1.0
// @description  Use arrow keys to go back and forth on comics on GoComics
// @author       Abdurazaaq Mohammed
// @license      The Unlicense
// @homepage     https://github.com/fxolan/userscripts
// @supportURL   https://github.com/fxolan/userscripts/issues
// @match        https://www.gocomics.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(e) {
      const key = e.key;
      if (key == "ArrowLeft") document.querySelector('.js-previous-comic.sm.fa-caret-left.btn-circle.btn-outline-secondary.btn.fa').click(); //Go to previous comic release
      else if (key == "ArrowRight") document.querySelector('.sm.fa-caret-right.btn-circle.btn-outline-secondary.btn.fa').click();//Go to next comic release
      // You can add more keys or change them as you want. The documentation for key values can be found here: https://developer.mozilla.org/en-US/docs/web/api/ui_events/keyboard_event_key_values
    });
})();
