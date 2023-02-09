// here we are create an Promises with the help of util Module in js.

const { readFile, writeFile } = require('fs').promises;
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromises = util.promisify(writeFile);


let start = async () => {
    try {
        let result = await readFile('./Chapter04/read.txt', 'utf-8');
        let finial_result = await readFile('./CHapter04/ReadSecond.txt', 'utf-8');
        await writeFile('./Chapter04/write.txt','This Is write file: ${result} ${finial_result}');
        console.log(`${result} ${finial_result}`);
    } catch (error) {
        console.log(error);
    }
}

start();