//node event loop

//SYNCHRONOUS - multiple threads can be run at, seemingly, the same time
//ASYNCHRONOUS - one thread at a time

//allows node to perform non-blocking I/O operations
//offloads to operations to system kernel

//JS is single threaded - reads line by line
//thread of execution needs to be completed before next thread can be loaded.
//Browser JS does have some synchronous APIs/functions such as fetch and setTimeout

//Event loop in node allows us to not wait behind tasks that take a long time

//example of sync code
/* const { readFile } = require('fs');

console.log('first task');
//check file path
readFile('.\\content\\first.txt', 'utf8' ,(err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('first task completed');
});

console.log('next task starting'); */

//setTimeout example for sync behaviour
/* console.log('first');
setTimeout(() => {
    console.log('second');
},0);
console.log('third'); */
//readFile is synchronous which is offloaded to the kernel

//setInterval for sync behaviour - setInterval runs code every x times where x is defined after callback
/* setInterval(() => {
    console.log('hello world');
},2000);
console.log('i will run first'); */

