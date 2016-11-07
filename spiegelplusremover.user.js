// ==UserScript==
// @name         Spiegel Plus remover
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Spiegel Plus und Bento links von spiegel.de entfernen
// @author       DOCa Cola
// @match        *://*.spiegel.de/*
// @grant        none
// @noframes
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// ==/UserScript==

function removeSPPlus(selector)
{
    $(selector).remove();
}

function linkRemover(selector)
{
    var element = $(selector);
    var htmlString = element.contents();
    element.replaceWith(htmlString);
}

$(document).ready(function() {
    removeSPPlus('.article-list:has(.spiegelplus)');
    removeSPPlus('.asset-box:has(.spiegelplus)');
    removeSPPlus('.teaser:has(.spiegelplus)');
    removeSPPlus('.module-box.spiegelplus');
    linkRemover('.text-link-int.spiegelplus');
    // bento
    removeSPPlus('.article-list:has(.bento)');
    removeSPPlus('.asset-box:has(.bento)');
    removeSPPlus('.teaser:has(.bento)');
    removeSPPlus('.module-box.bento');
});
