//path module - info about current file

const path = require('path');

//return platform defined separator
console.log(path.sep);

//join path using default separator (shown above)
const filePath = path.join('\\content', 'subfolder', 'test.txt');
console.log(filePath);

//get final section of path
const base = path.basename(filePath);
console.log(base);

//useful as absolute path of file will be different when ran on different environments
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);