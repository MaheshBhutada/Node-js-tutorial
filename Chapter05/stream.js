// Here we are using the stream module to perfrom some 
// operation or handle or manipulate stream data.

// const { writeFileSync } = require('fs');

// for(let i =0;i<10000;i++){
//     writeFileSync('./Chapter05/bigData.txt',`Hello world ${i} \n`, {flag : 'a'});
// }

// synatx to read a big file with stream.

const { createReadStream }  = require('fs');

// const stream =  createReadStream('./Chapter05/bigData.txt');

// deafault size of buffer is 64kb.
// last buffer - remainder.
// highWaterMark  - control size.

const stream = createReadStream('./Chapter05/bigData.txt', {highWaterMark : 90000, encoding: 'utf-8'});
                                                       // here we create an opition object in which we write the property
                                                        // highWaterMark increase the size of buzzer.
                                                        // change the encoding purpose.
stream.on('data',(result)=>{
    console.log(result);
})

// write an on method to handle the error message.
stream.on('error',(err)=>{
    console.log(err);
})
