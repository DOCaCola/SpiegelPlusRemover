// ==UserScript==
// @name         Spiegel Plus remover
// @namespace    http://tampermonkey.net/
// @version      0.3
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

$(document).ready(function() {
    removeSPPlus('.article-list:has(.spiegelplus)');
    removeSPPlus('.asset-box:has(.spiegelplus)');
    removeSPPlus('.teaser:has(.spiegelplus)');
    // bento
    removeSPPlus('.article-list:has(.bento)');
    removeSPPlus('.asset-box:has(.bento)');
    removeSPPlus('.teaser:has(.bento)');
});
