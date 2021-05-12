//streams are used to read and write sequentially
//writeable - used to write data sequentially
//readable - used to read data sequentially
//Duplex - used to read and write data sequentially
//transform - data can be modified when reading and writing

//good use case is for when reading files.
//async/sync methods for reading file reads the whole file and stores in file
//causes error if file too big

/* const {writeFileSync} = require('fs');

for(let i = 0; i < 10000; i++) {
    writeFileSync('.\\content\\big.txt', `hello world ${i}\n`, {flag: 'a'});
} */
//above created big file

const {createReadStream} = require('fs');

const stream = createReadStream('.\\content\\big.txt', {encoding : 'utf-8'});

stream.on('data', (result)=>{
    console.log(result.length);
});

//default 64kb read
//last buffer - remainder
//highWaterMark - control size
//const stream = createReadStream('.\\content\\big.txt', {highWaterMark: 90000});

stream.on('error', (err) => {
    console.log(err);
})