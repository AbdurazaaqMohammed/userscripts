// ==UserScript==
// @name         Upload image from Ezgif to Mobilim Images
// @namespace    https://github.com/fxolan
// @version      1.0
// @description  Adds a button to upload the converted image from ezgif to Mobilism
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

  function addButton() {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '10px';
    container.style.left = '10px';

    const button = document.createElement('button');
    button.innerText = 'Upload To Mobilism Images';
    button.addEventListener('click', getAndGoToMobilism);

    container.appendChild(button);
    document.body.appendChild(container);
  }

  function getAndGoToMobilism() {
    var image = document.getElementById('output').getElementsByTagName('img')[0];
    if (image) {
      GM_setValue('u', image.src);
      setTimeout(function() {
        window.location.href = mobilism;
      }, 500);
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
   window.addEventListener('load', addButton);
  } else {
    console.log(GM_getValue('u'));
    window.addEventListener('load', copyImageLink);
  }
})();
