// ==UserScript==
// @name           Quran.com Black Background
// @namespace      https://github.com/AbdurazaaqMohammed
// @version        1.0
// @author         Abdurazaaq Mohammed
// @description    Change background color to AMOLED black on Quran.com
// @match          https://quran.com/*
// @homepage       https://github.com/AbdurazaaqMohammed/userscripts
// @license        The Unlicense
// @supportURL     https://github.com/AbdurazaaqMohammed/userscripts/issues
// @grant          GM_addStyle
// @grant          GM_registerMenuCommand
// @grant          GM_setValue
// @grant          GM_getValue
// ==/UserScript==

(function() {
  'use strict';

  if(GM_getValue("isntFirstRun") == false) {
    GM_setValue("isntFirstRun", true);
    setSiteDarkMode();
  }

  function setSiteDarkMode() {
    // Force set dark mode on the website enabled so that text will be readable.
    document.querySelector("#settings-button").click();
    setTimeout(() => {
      document.querySelector("button.Switch_itemSmall__gKpF9.Switch_item__ePHkS:nth-of-type(4)").click();
      document.querySelector("#settings-drawer-container > div.Drawer_header__fCYmY > div > div > span > button").click();
      // The required time might depend on internet and device speed, I'm not sure.
    }, 500);
  }

  // Add option in userscript manager just in case
  GM_registerMenuCommand("Fix text readability", setSiteDarkMode);

  // Setting all divs' background to black will make buttons and such be difficult to distinguish and look ugly, so I set the main divs instead.
  GM_addStyle(`
      .QuranReader_withSidebarNavigationOpenOrAuto__s2YDZ.QuranReader_container__8c0FU,
      .SidebarNavigation_spaceOnTop__VHaMe.SidebarNavigation_visibleContainer__Y6E1c.SidebarNavigation_container__IooCv,
      .NavbarBody_itemsContainer__Jvm3k,
      .ContextMenu_sectionsContainer__x91pr,
      .SidebarNavigation_visibleContainer__Y6E1c.SidebarNavigation_container__IooCv,
      #settings-drawer-container > .Drawer_bodyWithBottomPadding__vEGtM.Drawer_bodyContainer__OuUzn {
        background-color: black !important;
      }
  `);
})();
