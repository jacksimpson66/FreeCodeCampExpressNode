//async fs imports for read and write file

const { readFile, writeFile } = require('fs');
console.log('start');
//for async file read, you need to add a callback function, which executes after the readFile function has been executed.
//if no encoding, then the buffer memory values are presented
//because you cannot access result variable outside of async callback param, all functionality must be nested.
readFile('.\\content\\first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('.\\content\\second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            '.\\content\\fourth-result.txt', 
            `ASYNC RESULT: Here is the result ${first}, \nand here is the second ${second} \n`, 
            {flag: 'a'},
            (err, result) => {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            }
        );
    })
});

console.log('starting next task');

//ASYNC: as soon is method is invoked, the program does not need to complete before moving onto next task
//logged will be: start, starting next task, done with this task
//PROMISES and ASYNC AWAIT are better alternatives