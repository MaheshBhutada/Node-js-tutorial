const fs = require('fs');

// synsc function.
// const data = fs.readFileSync('./read.txt','utf-8');

//Async function.
const data = fs.readFile('./Chapter04/read.txt','utf-8',(error, datat) => {
    console.log(datat);
})

console.log(data);
console.log("Helo Mahesh");