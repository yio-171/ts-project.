"use strict";
(() => {
    let userId;
    function greeting(myText, shirtsize) {
        if (typeof myText === 'string') {
            console.log(`string: ${myText.toLowerCase()}`);
        }
    }
    greeting('124', 'M');
})();
