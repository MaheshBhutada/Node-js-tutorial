const { readFileSync, createReadStream } = require('fs');
const { createServer } = require('http');

createServer((req,res)=>{
    const text = createReadStream('./Chapter05/bigData.txt', 'utf-8')
    text.on('open',(signal)=>{
        text.pipe(signal);
    })
    text.on('error',(err)=>{
        res.end(`we get an error ${err}`);
    })
}).listen(4000);