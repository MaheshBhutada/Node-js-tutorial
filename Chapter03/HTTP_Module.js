const http = require('http'); 

const server = http.createServer((req,resp)=>{
    if(req.url === '/'){
        resp.end('<h1>Welcome to our home page</h1>');
    }
    if(req.url === '/about'){
        resp.end('<h1>Welcome to our about us page</h1>');
    }

    resp.end(`
    <h1>Oops!hi</h1>
    <h3>Sorry!</h3>`);
})


// listen to a port.
server.listen(5000);