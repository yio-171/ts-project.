"use strict";
(() => {
    let productPrice = 100;
    productPrice = 12;
    console.log('productPrice:', productPrice);
    let customerAge = 28;
    customerAge = customerAge + 1;
    console.log('customerAge:', customerAge);
    let productInStock;
    console.log('productoInStock', productInStock);
    if (productInStock > 10)
        console.log('greather!');
    let discount = parseInt('123');
    console.log('discount', discount);
    if (discount < 200) {
        console.log('apply');
    }
    else {
        console.log('not apply');
    }
    let hex = 0xfff;
    console.log('hex', hex);
    let bin = 0b1010;
    console.log('bin', bin);
    const myNumber = 10;
})();
