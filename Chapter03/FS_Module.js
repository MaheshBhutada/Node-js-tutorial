const {readFileSync} = require('fs');
const text = readFileSync('./Chapter03/first.txt','utf8','r');
// const first = readFileSync('./first.txt','utf8');

console.log(text);