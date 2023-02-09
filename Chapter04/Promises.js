const { readFile } = require('fs');

// This is an pure use of callback function.

// readFile('./Chapter04/read.txt','utf-8', (err,data)=>{
//     if(err){
//         return;
//     }
//     else{
//         console.log(data);
//     }
// })

// use of promises to avoid the use of multiple callback function.

const text = (path) => {
   return new Promise((resolve,reject) =>{
        readFile(path,'utf-8', (err,data) =>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
   })
}

// handle promises using then method.

// text('./read.txt')
// .then((message)=>{
//     console.log(message);
// })
// .catch((message)=>{
//     console.log(message);
// })

// handle promises using async,await.

const start = async () =>{
    try {
        let result = await text('./Chapter04/read.txt');
        let finial_result = await text('./Chapter04/ReadSecond.txt');
        console.log(`hello ${result} ${finial_result}`);
    } catch (error) {
        console.log(error);
    }
}

start();