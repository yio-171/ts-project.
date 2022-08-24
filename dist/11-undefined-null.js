"use strict";
(() => {
    const createProductToJSON = (title, createdAt, stock, size) => {
        return {
            title,
            createdAt,
            stock,
            size
        };
    };
    const createProductToJSON2 = (title, createdAt, stock, size) => {
        return {
            title,
            createdAt,
            stock,
            size
        };
    };
    console.log(createProductToJSON('New saga', new Date(), 3000, 'L'));
    console.log(createProductToJSON2('New time', new Date(), 2000));
})();
