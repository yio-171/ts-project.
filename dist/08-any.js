"use strict";
(() => {
    let myDynamicVar;
    myDynamicVar = 10;
    myDynamicVar = 'hola';
    myDynamicVar = true;
    myDynamicVar = [10, 'letras', true];
    myDynamicVar = {};
    myDynamicVar = 'hola';
    const newValue = myDynamicVar.toLocaleUpperCase();
    console.log(newValue);
    myDynamicVar = 123;
    const newNumber = myDynamicVar.toFixed();
    console.log(newNumber);
})();
