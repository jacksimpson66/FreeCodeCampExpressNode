//Modules
//CommonJS, every file is a module by default
//Modules are encapsulated code

//Copied below names into 4-names.js file
/*
const secret = 'SECRET';
const jack = "Jack";
const anup = "Anup";
*/

//Copied below function to 5-utils.js
/*
const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}*/

//importing
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-module');

//the function in this will run as the program is invoked when imported. Try avoid side effects in this case to avoid.
require('./7-mind-grenade');
//log the names the have been imported
//console.log(names);

sayHi(names.jack);
sayHi(names.anup);

//another way is to descruct the object from import: const {jack, anup} = require('./4-names');


console.log(data.items[0]);
console.log(data['singlePerson']['name']);
console.log(data.singlePerson.name);