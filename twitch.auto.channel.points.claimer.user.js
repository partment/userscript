// ==UserScript==
// @name Twitch Auto Channel Points Claimer
// @version 1.3
// @author PartMent
// @description Automatically claim channel points.
// @author PartMent
// @match https://www.twitch.tv/*
// @license MIT
// @grant none
// @namespace https://greasyfork.org/users/310437
// ==/UserScript==

var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
if (MutationObserver) console.log('Auto claimer is enabled.');
var observer = new MutationObserver(function(mutations) {
    setTimeout(function () {
        var bonus = document.getElementsByClassName('claimable-bonus__icon');
        for (var i = 0;i<bonus.length;i++) {
            if (i == 0) console.log('Claimed!');
            bonus[i].click();
        }
    }, Math.random() * 1000 + 2500);
});
observer.observe(document.body, {childList: true, subtree: true});