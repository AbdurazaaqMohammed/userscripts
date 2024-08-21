// ==UserScript==
// @name            Copy Audible book info for Mobilism
// @namespace       https://github.com/AbdurazaaqMohammed
// @version         1.0
// @author          Abdurazaaq Mohammed
// @description     Format Audible book information for posting on Mobilism and copy to clipboard
// @match           https://www.audible.com/pd/*
// @match           https://images.mobilism.org/*
// @match           https://ezgif.com/*
// @license         The Unlicense
// @homepage        https://github.com/AbdurazaaqMohammed/userscripts
// @supportURL      https://github.com/AbdurazaaqMohammed/userscripts/issues
// @grant           GM_setValue
// @grant           GM_getValue
// @grant           GM_setClipboard
// @grant           GM_openInTab
// ==/UserScript==

(function() {
    'use strict';

    const url = window.location.href;
    const mobilism = 'https://images.mobilism.org/';

    function goToMobilism(image) {
        const h = image.naturalHeight;
        const w = image.naturalWidth;
        checkImageSize();
        if (needsResize(h, w)) {
            setNewRes(h, w, h / w);
            openTab('https://ezgif.com/resize?url=' + image);
        } else if (GM_getValue('needsCompress')) {
            openTab('https://ezgif.com/optimize?url=' + image);
        } else {
            GM_setValue('u', image);
            openTab(mobilism);
        }
    }

    function getValue(key) {
        return new Promise((resolve) => {
            GM_getValue(key, (value) => {
                resolve(value);
            });
        });
    }

    function openTab(link) {
        try {
            GM_openInTab(link);
        } catch (e) {
            window.open(link, '_blank');
        }
    }

    function uploadImg() {
        document.getElementById('imgUrl').value = GM_getValue('u');
        document.querySelector('#uploadbutton').click();
    }

    function copyImageLink() {
        GM_setClipboard(GM_getValue("formattedInfo") + '\n\n' + document.querySelector('#codelbb').value + '[break]\n[u]Download Instructions:[/u]');
        alert('Audiobook information has been copied to clipboard!');
    }

    function checkImageSize() {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw new Error('Network response was not ok.');
            })
            .then(response => {
                // Access the Content-Length header to get the file size
                const contentLength = response.headers.get('Content-Length');
                if (contentLength > 4000000) GM_setValue('needsCompress', true);
            })
            .catch(error => console.error('Error fetching image:', error));
    }

    function needsResize(h, w) {
        return h > 2499 || w > 2499;
    }

    function setNewRes(height, width, aspectRatio) {
        if (height > width) {
            height = 2499;
            width = Math.round(height / aspectRatio);
        } else {
            width = 2499;
            height = Math.round(width * aspectRatio);
        }
        GM_setValue('newHeight', height);
        GM_setValue('newWidth', width);
    }

    function formatBookInfo() {
        const titleElement = document.querySelector('h1[data-automation-id="productTitle"]');
        const title = titleElement ? titleElement.innerText : 'Unknown Title';
        const authorElement = document.querySelector('.authorLabel a');
        const author = authorElement ? authorElement.innerText : 'Unknown Author';
        const narratorElement = document.querySelector('.narratorLabel a');
        const narrator = narratorElement ? narratorElement.innerText : 'Unknown Narrator';
        const runtimeElement = document.querySelector('li.bc-list-item.runtimeLabel');
        const runtime = runtimeElement ? runtimeElement.innerText : 'Unknown';
        const fileSize = "FileSizeHere";
        const summaryElement = document.querySelector('.productPublisherSummary');
        const summary = summaryElement ? summaryElement.innerText.replace("Publisher's summary\n\n", "") : 'No summary available.';
        const categoryElement = document.querySelector('.bc-chip');
        const category = categoryElement ? categoryElement.innerText : 'Unknown Category';

        let formattedInfo = `[b]${title} by ${author} Narrated by ${narrator}[/b]
[u]Requirements:[/u] .M4A/.M4B reader, ${fileSize} MB ${runtime}
[u]Overview:[/u] ${summary}
[b]Genre:[/b] Audiobooks > ${category}`;
        GM_setValue("formattedInfo", formattedInfo);
        goToMobilism(document.querySelector("#center-1 > div > div.hero-content.bc-pub-clearfix.bc-container.hero-overflow-visible > div > div > div > div.bc-col-responsive.bc-col-3 > div > div:nth-child(1) > img").src);
    }

    if (url.endsWith(mobilism)) {
        window.addEventListener('load', uploadImg);
    } else if (url.endsWith('.php')) {
        window.addEventListener('load', copyImageLink);
    } else if (url.startsWith('https://ezgif.com/resize')) {
        document.querySelector(".new-height.number.text").value = GM_getValue('newHeight');
        document.querySelector(".new-width.number.text").value = GM_getValue('newWidth');
        document.getElementById('ar').selectedIndex = 2;
    } else if (url.includes('ezgif.com/tmp/')) {
        goToMobilism();
    } else {
        const button = document.createElement('button');
        button.innerText = 'Copy Formatted Info';
        button.style.position = 'fixed';
        button.style.top = '10px';
        button.style.right = '10px';
        button.style.zIndex = '9999';
        button.addEventListener('click', formatBookInfo);
        document.body.appendChild(button);
        GM_deleteValue('i');
    }
})();
