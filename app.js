//async patterns

//createServer callback function is asynchronous
//if you perform some long, blocking code for , lets say, the /about url, any other user trying to access any other page will be blocked
//from doing so until the blocking code has been executed

//here is where promises come in (and async await)

const { readFile, writeFile } = require('fs');
//these below, allow you to set up promise versions of the param function
//replicates lines 17-28
//need to pass both the path and the encoding to readFilePromise

const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

//async
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    })
}

getText('.\\content\\first.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

//to use promises, set up a function with whatever parammeters you need
//within this function, return a promise function, that takes in a callback function with two params, resolve and reject.
//execute code within this callback that is sync, and reject(err) or resolve(data)
//when calling function, use .then (with function as callback) and then .catch (with function as parameter)

//sync
/* readFile('.\\content\\first.txt', 'utf8', (err, data) => {
    if (err) {
        return;
    }
    else {
        console.log(data);
    }
}); */

//async await syntax


//async await - set up function with async() as single parameter
//in try, catch block - set up variables to hold the result of the getText function (that uses a promise) preceded by await
//await causes the files to be read asynchronously
//any errors from getText are logged in catch block
//NOTE: getText function has been replaced by util.promisify version (readFilePromise)
const start = async() => {
    try {
        const first = await readFilePromise('.\\content\\first.txt', 'utf8');
        const second = await readFilePromise('.\\content\\second.txt', 'utf8');
        await writeFilePromise('.\\content\\fifth.txt', `THIS IS: ${first} and ${second}`);
        console.log(first, ' ',second);
    } catch (err) {
        console.log(err);
    }
}

start();

//you can even use await before readFile and writeFile functions without needing to promisify them!
//we will use this in the tutorial going forward!