const fs = require('fs');

// synsc function.
// const data = fs.readFileSync('./read.txt','utf-8');

//Async function.
const data = fs.readFile('./Chapter04/read.txt','utf-8',(error, datat) => {
    console.log(datat);
})

console.log(data);
console.log("Helo Mahesh");

const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url == '/'){
        console.log("User want to acces the home page");
        res.end('Home Page');
    }

    else if(req.url == '/about'){
        console.log("User want to acces the about page");
        res.end('About Page');
    }
    else{
        console.log("User want to acess another page");
        res.end("This page is not created");
    }
})

server.listen(4000);