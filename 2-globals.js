// GLOBALS - NO WINDOW OBJECT

/*
__dirname - path to current directory
__filename - file name
require - function to use modules
module - info about current module (file)
process - info about env where program is being executed
*/

//prints path to current directory
console.log(__dirname);

//prints path+filename
console.log(__filename);

//prints hello world every 1 second
setInterval(() => {
    console.log("Hello World");
}, 1000)

 