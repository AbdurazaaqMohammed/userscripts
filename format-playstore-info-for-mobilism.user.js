// ==UserScript==
// @name         Copy information of apps from Play Store to post on Mobilism
// @namespace    https://github.com/fxolan/userscripts
// @version      1.0
// @description  Copy information of apps from Play Store and format it to post on Mobilism
// @author       Abdurazaaq Mohammed
// @match        https://play.google.com/store/apps/*
// @grant        GM_setClipboard
// @license      The Unlicense
// @homepage     https://github.com/fxolan/userscripts
// @supportURL   https://github.com/fxolan/userscripts/issues
// ==/UserScript==

(function() {
  'use strict';

  function getInfo() {
    const aboutAppButtons = document.getElementsByClassName('google-material-icons VfPpkd-kBDsod W7A5Qb')
    for (let i=0; i<aboutAppButtons.length; i++){
      aboutAppButtons[i].click(); // have to open the about page to load the info
    }

    setTimeout ( function () {
      const title = document.querySelector('h1').innerText;
      const requiredVersion = document.querySelector("#yDmH0d > div:nth-child(30) > div.VfPpkd-wzTsW > div > div > div > div > div.fysCi > div:nth-child(5) > div:nth-child(5) > div.reAt0").innerText;
      const version = document.querySelector("#yDmH0d > div:nth-child(30) > div.VfPpkd-wzTsW > div > div > div > div > div.fysCi > div:nth-child(5) > div:nth-child(2) > div.reAt0").innerText;
      const desc = document.querySelector("#yDmH0d > div:nth-child(30) > div.VfPpkd-wzTsW > div > div > div > div > div.fysCi > div:nth-child(1)").innerText;
      const changelog = document.querySelector("#yDmH0d > c-wiz.SSPGKf.Czez9d > div > div > div.tU8Y5c > div.wkMJlb.YWi3ub > div > div.qZmL0 > div:nth-child(1) > c-wiz:nth-child(3) > section > div > div").innerText;
      const firstLine = desc.split('\n')[0];
      const remainingLines = desc.split('\n').slice(1).join('\n');
      const bruh = '[b]' + title + ' v' + version + '[/b]' + '\n[u]Requirements:[/u] ' + requiredVersion + '\n[u]Overview:[/u] ' + firstLine + '\n[img]https://images.mobilism.org/?dm=NUG2WDGF[/img]\n[break]\n' + remainingLines + "\n\n[u]What's New:[/u]\n" + changelog + '\n\n[b]This app has no advertisements[/b]\n\n[u]More Info:[/u]\n[code]' + window.location.href + '[/code]\n[u]Download Instructions:[/u]\nUniversal\n\nMirror:\n\narmeabi-v7a\n\nMirror:\n\narm64-v8a\n\nMirror:\n\nx86\n\nMirror:\n\nx86_64\n\nMirror:\n';
      if (bruh) {
        GM_setClipboard(bruh);
        alert('Copied info to clipboard.');
      } else {
        alert('Error; try increase the loading time in the script');
      }
    }, 2000) //loading time in milliseconds
  }

  getInfo();
})();
