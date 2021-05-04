//npm allows us to install packages as dependencies for projects
//package is resuable code - folder of js code
//modules/dependencies/package are used interchangeably at this level.
//npm - anyone can publish anything. Use highly rated ones.  

//npm           global command, comes with node
//npm --version     to check version

//local dependency (only for this project)
//npm i <packageName>

//global dependency (use for any project)
//npm install -g <packageName> 

//package.json     stores important info about project / package
//create manually by creating package.json in the root directory
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);

//.gitignore should have /node_modules in it - as these files are massive