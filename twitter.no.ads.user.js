// ==UserScript==
// @name Twitter No Ads
// @version 1.2
// @author PartMent
// @description Automatically remove Twitter Ads.
// @match https://mobile.twitter.com/
// @match https://twitter.com/
// @match https://mobile.twitter.com/home
// @match https://twitter.com/home
// @license MIT
// @grant none
// @namespace https://greasyfork.org/users/310437
// ==/UserScript==

let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
if (MutationObserver) console.log('No Ads is enabled.');
let observer = new MutationObserver(e => {
    let ads = document.querySelector('div div div article div div div div:nth-of-type(5):not([role="group"]) div span');
    if (ads) {
        ads = ads.parentNode.parentNode.parentNode.parentNode.parentNode;
        ads.remove();
        console.log('Ads have been removed.');
    }
});
observer.observe(document.body, {childList: true, subtree: true});