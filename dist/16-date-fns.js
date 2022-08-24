"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const birthDay = new Date(1994, 5, 27);
const new_Date = (0, date_fns_1.subDays)(birthDay, 7);
console.log(new_Date);
