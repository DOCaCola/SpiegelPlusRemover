// ==UserScript==
// @name         Spiegel Plus remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove any Spiegel Plus content and reference from the site
// @author       DOCa Cola
// @match        *://*.spiegel.de/*
// @grant        none
// ==/UserScript==

function removeSPPlus(selector)
{
    //$(selector).css("opacity","0.2");
    $(selector).remove();
}

$(document).ready(function () {
    removeSPPlus('.teaser:has(.laterpay-icon-big)');
    removeSPPlus('.ressort-teaser-box-top:has(.laterpay-icon-big)');
    removeSPPlus('.pano_xxl .asset-box:has(.laterpay-icon)');
    removeSPPlus('.spplusboxhp');
    removeSPPlus('li:has(.laterpay-icon)');
    removeSPPlus('.module-box.spiegelplus');
});

