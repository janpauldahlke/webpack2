//calls functions from sum.js then prints result
//commonJS way
//const sum = require('./sum'); // relative path reference './'

//es6 way
import sum from './sum';

console.log(sum(10,10));
console.log(sum(1,13));
console.log(sum(11,12));
