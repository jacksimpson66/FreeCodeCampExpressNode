//local
const secret = 'SECRET';
//share these with rest of app
const jack = "Jack";
const anup = "Anup";

//logs to console the module object, in particular the property of exports, which is an object
//console.log(module);

//As a rule, export the minimum!

//because of ES6 syntax, the below is the same as {jack: jack, anup: anup}
module.exports = {jack, anup}
