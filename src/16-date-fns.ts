import {subDays,format} from 'date-fns';

const birthDay = new Date(1994,5,27);
const new_Date = subDays(birthDay,7);

console.log(new_Date);

