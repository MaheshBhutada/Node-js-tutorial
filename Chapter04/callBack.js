const { readFile } = require('fs');

// here we are using readFile function
// -> basically it is an Asynchrous function there fore we are using the call back fn.

// if we want to use the Sync function i.e is 'readFileSync'.

readFile('./Chapter04/read.txt','utf-8', (error,result) => {
    if(error){
        console.log(error);
        return;
    }
    console.log(result);
    console.log("Complete the exceuation of file");
})

console.log('Starting next task');

// setTimeOut function.

console.log("first");

setTimeout(()=>{
    console.log('second');
},0)

console.log("Third");

// HTTP server excample.
const http = require('http');

 let server = http.createServer((req,res) => {
    console.log('request event');
    res.end("Please help me to sort this");
})

server.listen(3000);