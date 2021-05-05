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
//but, how will any one else use our code if the dependencies arent stored?
//write npm install
//this will install any dependencies in the package.json folder.

//npm i <packageName> -D will install as a dev dependency (or --save-dev)
//this will only be in use/shared for dev environments

//scripts object in package.json allows us to declare dev runtimes and production
//eg "start": "node app.js", when it is start you only need to say npm start
//for "dev" script, you need to do npm run dev

console.log("Hello World");

//nodemon dependency allows for a hot refresh

//npm uninstall <packageName>      uninstall package
//or
//remove node_modules folder, remove package-lock.json and packageName dependency from package.json and then npm install

//global install extras
//npx allows you to not have to globally install a package - such as create-react-app
//npx - package runner tool with npm 5.2+

//package-lock.json
//some dependencies rely on other packages
//package-lock.json solves this, securing the versions of ...
//.... the packages the dependencies use
