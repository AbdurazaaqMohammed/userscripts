// ==UserScript==
// @name         Ezgif Quick Link Copy
// @namespace    https://github.com/fxolan
// @version      1.0
// @description  Adds a button to quickly copy the converted image link to ezgif
// @author       Abdurazaaq Mohammed
// @match        *://ezgif.com/*/*.*
// @grant        GM_setClipboard
// @homepage     https://github.com/fxolan/userscripts
// @license      The Unlicense
// @supportURL   https://github.com/fxolan/userscripts/issues
// ==/UserScript==

(function() {
    'use strict';

    function addButton() {
        var container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '10px';
        container.style.left = '10px';

        var button = document.createElement('button');
        button.innerText = 'Copy Image Link';
        button.addEventListener('click', copyImageLink);

        container.appendChild(button);
        document.body.appendChild(container);
    }

    function copyImageLink() {
        var image = document.getElementById('output').getElementsByTagName('img')[0];
        if (image) {
            GM_setClipboard(image.src);
            alert('Image link copied to clipboard.');
        } else {
            alert('Image not found!');
        }
    }

    window.addEventListener('load', addButton);
})();
