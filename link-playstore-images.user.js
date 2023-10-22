// ==UserScript==
// @name         Link Images on Playstore
// @namespace    https://github.com/fxolan/userscripts
// @version      1.0
// @description  Open full page link of image when clicked on Google Play app page
// @author       Abdurazaaq Mohammed
// @match        *://play.google.com/store/apps/*
// @grant        none
// @license      The Unlicense
// @homepage     https://github.com/fxolan/userscripts
// @supportURL   https://github.com/fxolan/userscripts/issues
// ==/UserScript==

(function() {
    'use strict';

    // Select all images on the page
    var images = document.getElementsByTagName('img');

    // Add a click event listener to each image
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function(e) {

            // Get the image URL and remove size parameters to get the full size image
            var noSizeParams = this.src.split('=')[0];
            var fullSizeImageUrl = noSizeParams + "=w2560-h1440-rw";
            // Open the full size image in a new tab
            window.open(fullSizeImageUrl);
        });
    }
})();
