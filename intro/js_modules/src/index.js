//calls functions from sum.js then prints result
//commonJS way
//const sum = require('./sum'); // relative path reference './'

//es6 way
/*import sum from './sum';
import './image_view';

console.log(sum(10,10));
console.log(sum(1,13));
console.log(sum(11,12));
*/

//codesplitting section



const button = document.createElement('button');
button.innerText = 'Click me';

button.onclick = () => {
  //import only on Click
  // System.import(file) // ES6 module spec
  System.import('./image_view'). // resolved in promise
    then(module => {
      //console.log(module);
      module.default();
    });
};

document.body.appendChild(button);
