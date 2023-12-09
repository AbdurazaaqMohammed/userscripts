// ==UserScript==
// @name         Upload image from Ezgif to Mobilism Images
// @namespace    https://github.com/fxolan
// @version      1.0
// @description  Upload the converted image from ezgif to Mobilism and copies the image link after converting it.
// @author       Abdurazaaq Mohammed
// @match        https://ezgif.com/*/*.*
// @match        https://images.mobilism.org/
// @match        https://images.mobilism.org/thumbnail.php
// @grant        GM_setClipboard
// @grant        GM_setValue
// @grant        GM_getValue
// @homepage     https://github.com/fxolan/userscripts
// @supportURL   https://github.com/fxolan/userscripts/issues
// @license      The Unlicense
// ==/UserScript==

(function() {
  'use strict';
  const url = window.location.href;
  const mobilism = 'https://images.mobilism.org/';

  function getAndGoToMobilism() {
    var image = document.getElementById('output').getElementsByTagName('img')[0];
    if (image) {
      GM_setValue('u', image.src);
      window.location.href = mobilism;
    } else {
      alert('Image not found!');
    }
  }

  function uploadImg() {
    document.getElementById('imgUrl').value = GM_getValue('u');
    document.querySelector('#uploadbutton').click();
  }

  function copyImageLink() {
    const link = document.querySelector('#codelbb')
    GM_setClipboard(link.value);
    link.click();
    link.click();
  }

  if (url.endsWith(mobilism)) {
    window.addEventListener('load', uploadImg);
  } else if (url.startsWith('https://ezgif')) {
   window.addEventListener('load', getAndGoToMobilism);
  } else {
    console.log(GM_getValue('u'));
    window.addEventListener('load', copyImageLink);
  }
})();
