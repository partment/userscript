// ==UserScript==
// @name Twitter Auto Latest Tweet
// @version 1.0
// @author PartMent
// @description Automatically claim channel points.
// @match        https://mobile.twitter.com/
// @match        https://twitter.com/
// @match        https://mobile.twitter.com/home
// @match        https://twitter.com/home
// @license MIT
// @grant none
// @namespace https://greasyfork.org/users/310437
// ==/UserScript==

let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
if (MutationObserver) console.log('Auto claimer is enabled.');
let observer = new MutationObserver(e => {
    let latest = false;
    if(document.querySelector('main div[data-testid="primaryColumn"] div[aria-expanded="false"]:not([data-testid="userActions"])') && !latest) {
        document.querySelector('main div[data-testid="primaryColumn"] div[aria-expanded="false"]:not([data-testid="userActions"])').click();
    }
    e.forEach(l => {
        let menusvg = document.evaluate('./div/div/div/div/*[local-name() = "svg"]/*[local-name() = "g"]', l.target, null, XPathResult.ANY_TYPE, null).iterateNext();
        if (menusvg && menusvg.childElementCount == 3) {
            let menubutton = document.evaluate('./div/div/div/div[2]', l.target, null, XPathResult.ANY_TYPE, null).iterateNext();
            menubutton.click();
            latest = true;
            observer.disconnect();
        }else if(menusvg && menusvg.childElementCount == 6) {
            if (!latest) document.querySelector('div[data-focusable="true"] div').click();
            latest = true;
            observer.disconnect();
        }
    });
});
observer.observe(document.body, {childList: true, subtree: true});