// ==UserScript==
// @name         Spiegel Plus remover
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  Spiegel Plus und Bento links von spiegel.de entfernen
// @author       DOCa Cola
// @match        *://*.spiegel.de/*
// @grant        none
// @noframes
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// ==/UserScript==

function removeElement(selector)
{
    $(selector).remove();
}

// Remove links and leave only their text content
function removeLinkAndLeaveText(selector)
{
    var element = $(selector);
    var htmlString = element.contents();
    element.replaceWith(htmlString);
}

$(document).ready(function() {
    removeElement('.article-list:has(.spiegelplus)');
    removeElement('.asset-box:has(.spiegelplus)');
    removeElement('.teaser:has(.spiegelplus)');
    removeElement('.module-box.spiegelplus');
    removeLinkAndLeaveText('.text-link-int.spiegelplus');
    // bento
    removeElement('.article-list:has(.bento)');
    removeElement('.asset-box:has(.bento)');
    removeElement('.teaser:has(.bento)');
    removeElement('.module-box.bento');
});
