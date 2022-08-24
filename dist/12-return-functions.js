"use strict";
(() => {
    const calcTotal = (prices) => {
        let total = 0;
        prices.forEach(item => {
            total += item;
        });
        return total.toString();
    };
    const printTotal = (prices) => {
        let total = calcTotal(prices);
        console.log(`total : ${total}`);
    };
    printTotal([1, 2, 3, 4, 5, 6, 7]);
})();
