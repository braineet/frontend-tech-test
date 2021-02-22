/* eslint-disable func-names */
import 'core-js/stable';

/**
 * Element.closest() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */
if (!Element.prototype.closest) {
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector;
    }
    Element.prototype.closest = function(s) {
        const el = this;
        let ancestor = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (ancestor.matches(s)) return ancestor;
            ancestor = ancestor.parentElement;
        } while (ancestor !== null);
        return null;
    };
}
if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require
    require('@webcomponents/shadydom');
}
