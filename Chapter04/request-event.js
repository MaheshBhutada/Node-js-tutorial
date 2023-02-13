const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.end('Welcomme to event emitter');
// })

// Using Event Emitter API.
const server = http.createServer();

// emits request the event.
// subcribe to it/ listen for it / respond to it.
server.on('requests', (req,res)=>{
    res.end('Welcome');
})

server.listen(3000);

// there aresome built in module in node.