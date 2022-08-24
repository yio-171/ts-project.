"use strict";
(() => {
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({
        title: 'test1',
        createAt: new Date(1994, 6, 27),
        stock: 12
    });
    console.log(products);
})();
