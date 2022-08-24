"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
(0, product_service_1.addProduct)({
    title: 'Prod1',
    createAt: new Date(),
    stock: 5
});
(0, product_service_1.addProduct)({
    title: 'Prod2',
    createAt: new Date(),
    stock: 5,
    size: 'XL'
});
console.log(product_service_1.products);
let total_Stock = (0, product_service_1.calcStock)();
console.log('total stock:', total_Stock);
