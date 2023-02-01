// Modules.
// here we get the data from name.js files.

const {person1,person2} = require('./name');
const sayHi = require('./function');

// direct all the require function without allow an variable.
require('./add');


console.log({person1,person2});
sayHi(person1);