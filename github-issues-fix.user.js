// ==UserScript==
// @name        GitHub - open closed issues if there are no open issues
// @namespace   https://github.com/AbdurazaaqMohammed
// @author       Abdurazaaq Mohammed
// @version     1.0
// @description Automatically opens closed issues if there are no open issues on GitHub.
// @match       https://github.com/*/issues
// @grant       none
// @run-at      document-start
// @homepage    https://github.com/AbdurazaaqMohammed/userscripts
// @supportURL  https://github.com/AbdurazaaqMohammed/userscripts/issues
// @license     The Unlicense
// ==/UserScript==

(function() {
  'use strict';

  if(document.querySelector('.selected.btn-link').textContent.trim().startsWith(0)) document.querySelector("#js-issues-toolbar > div > div.flex-auto.d-none.d-lg-block.no-wrap > div > a:nth-child(2)").click();
})();
