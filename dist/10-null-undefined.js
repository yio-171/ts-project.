"use strict";
(() => {
    let myUndefined;
    let myNull;
    function hi(name) {
        let hi = 'hola';
        if (name) {
            hi += name;
            console.log('HI 1', hi);
        }
        else {
            console.log('nobody');
        }
    }
    function hiV2(name) {
        let hi = 'hola';
        hi += name === null || name === void 0 ? void 0 : name.toLocaleLowerCase();
        console.log('hiV2', hi);
    }
    hi('giovanni');
    hiV2(null);
})();
