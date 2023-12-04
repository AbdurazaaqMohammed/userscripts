// ==UserScript==
// @name         FreeRice Multiplication Script/Bot
// @namespace    https://github.com/fxolan
// @version      1.0.1
// @description  Automatically play FreeRice multiplication table
// @author       Abdurazaaq Mohammed
// @match        https://play.freerice.com/categories/multiplication-table
// @grant        none
// @homepage     https://github.com/fxolan/userscripts
// @license      The Unlicense
// @supportURL   https://github.com/fxolan/userscripts/issues
// ==/UserScript==

function eval() {

  const numbers = document.querySelector('.card-title').innerText.split(' x ');

  return numbers[0] * numbers[1];
}

function clickAnswer() {
  const answers = document.querySelectorAll('.card-button');

  for (i = 0; i < answers.length; i++) {
    if (answers[i].innerText == eval()) {
      answers[i].click();
      break;
    }
  }
}
setInterval(clickAnswer, 1000);
setTimeout(function(){ location.reload(); }, 15000); //When you answer questions too quickly, Freerice starts slowing down the rate at which it gives you new questions. This can simply be reset by refreshing the page every once in a while.
