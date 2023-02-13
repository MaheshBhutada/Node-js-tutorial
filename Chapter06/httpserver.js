// const http = require('http');

// const server = http.createServer((req,res) => {
//     // here we are providing some metadata related to information that we are providing.
//     console.log(req);
//     res.writeHead(200,{'content-type':'text/html'});
//     // status code  -> 200 mean data is found.
//     // status code -> 404 mean we get an error.
//     res.end('<h1 color:"red"> Hello Mahesh </h1>');
// })

// server.listen(4000); 


// add the file to a server.

const http = require('http');
const {readFileSync} = require('fs');

const homePage = readFileSync('./Chapter06/navbar-app/index.html');
const homeStyle = readFileSync('./Chapter06/navbar-app/styles.css');
const homeLogo = readFileSync('./Chapter06/navbar-app/Logo.svg');
const homeLogic = readFileSync('./Chapter06/navbar-app/browser-app.js');


const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homePage);
        res.end();
    }

    // about html page.

    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homePage);
        res.end();
    }

    // about Style page.

    else if(url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'});
        res.write(homeStyle);
        res.end();
    }

    // about Logo page.

    else if(url === '/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'});
        res.write(homeLogo);
        res.end();
    }

    // about Logic page.
    
    else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascripit'});
        res.write(homeLogic);
        res.end();
    }

    else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.write("Match not found");
        res.end();
    }
})

server.listen(4000);