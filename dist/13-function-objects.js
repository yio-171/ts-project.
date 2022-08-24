"use strict";
(() => {
    const login = (data) => {
        console.log(`${data.usuario} ${data.password}`);
    };
    login({
        usuario: 'giovanni',
        password: 12345
    });
    let products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({ title: 'first test', createAt: new Date(8, 10, 2022), stock: 1, size: 'S' });
})();
