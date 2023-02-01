const {readFileSync} = require('fs');
const text = readFileSync('./first.txt','utf8','r');
// const first = readFileSync('./first.txt','utf8');

console.log(text);