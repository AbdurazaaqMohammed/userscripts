// ==UserScript==
// @name        Remove file name from Apkadmin URLs
// @namespace   https://github.com/fxolan
// @author      Abdurazaaq Mohammed
// @version     1.0
// @description Removes unnecessary file name from Apkadmin URLs. This should be applicable to other websites too.
// @match       https://apkadmin.com/*
// @grant       none
// @run-at      document-start
// @homepage    https://github.com/fxolan/userscripts
// @supportURL  https://github.com/fxolan/userscripts/issues
// @license     The Unlicense
// ==/UserScript==

(function() {
  'use strict';

  const url = window.location.href;
  const lastSlashIndex = url.lastIndexOf('/');
  if (lastSlashIndex > url.indexOf('//') + 1 && url.split('/').length > 4) {
    window.location.href = url.substring(0, lastSlashIndex);
  }

})();
