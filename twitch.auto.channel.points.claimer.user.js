// ==UserScript==
// @name Twitch Auto Channel Points Claimer
// @version 1.5.1
// @author PartMent
// @description Automatically claim channel points.
// @match https://www.twitch.tv/*
// @match https://dashboard.twitch.tv/*
// @license MIT
// @grant none
// @namespace https://greasyfork.org/users/310437
// ==/UserScript==

let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
if (MutationObserver) console.log('Auto claimer is enabled.');
let observer = new MutationObserver(e => {
    let bonus = document.querySelector('.claimable-bonus__icon');
    if (bonus) {
        bonus.click();
        setTimeout(() => {
            console.log('Claimed!');
        }, Math.random() * 1000 + 5000);
    }
});
observer.observe(document.body, {childList: true, subtree: true});