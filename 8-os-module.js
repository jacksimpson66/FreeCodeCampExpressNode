//there are pre built modules in Node such as os, fs, http, and path

//no need for ./ as it is already installed (pre built module)
const os = require('os');

//info about current user
const user = os.userInfo();

//method returns the system uptime in seconds
console.log(os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);