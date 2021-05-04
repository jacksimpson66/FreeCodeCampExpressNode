//destructuring import
const { readFileSync, writeFileSync } = require('fs');

console.log("Start");

//fs.readFileSync takes two parameters, first the path then the encoding
const first = readFileSync('.\\content\\first.txt', 'utf-8');
const second = readFileSync('.\\content\\second.txt', 'utf-8');

console.log(first, second);

//by default, writeFileSync overwrites any data in the file. To append, you need to add an object with an 'a' flag value
writeFileSync(
            '.\\content\\result-third.txt', 
            `Here is the result ${first}, \nand here is the second ${second} \n`,
            {flag: 'a'}
);

console.log('done with this task');
console.log('starting the next one');

//SYNC: one by one, waits until task is done before starting next task
//if one operation takes a long time, sync means that, for multiple users, 
//a user may be stuck in a queue for a long time for a task to be done
//only one user served at a time