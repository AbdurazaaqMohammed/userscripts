// ==UserScript==
// @name         Stop Old Reddit asking to login
// @namespace    https://github.com/fxolan
// @version      1.1.1
// @description  Remove the login fields from Old Reddit
// @match        https://old.reddit.com/*
// @match        https://np.reddit.com/*
// @grant        none
// @homepage     https://github.com/fxolan/userscripts
// @supportURL   https://github.com/fxolan/userscripts/issues
// @license      The Unlicense
// ==/UserScript==

(function() {
  'use strict';

  function hideElement(s) {
    document.querySelector(s).remove();
  }

  hideElement('#login_login-main');
  hideElement('.user');
  hideElement('#header-bottom-right > .separator');
  hideElement('.title.selected');
  hideElement('.toggle.subscribe-button.fancy-toggle-button');
})();
