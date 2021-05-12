//event driven programming - where flow of execution in a program is dictated heavily by events
//used a lot in node

//calling it EventEmitter is common practice
//EventEmitter is a class
const EventEmitter = require('events');

//creates event emitter objecr
const customEmitter = new EventEmitter();

//emitter events:
//on - listen for event
//emit - emits event
//you must listen first then emit
//you can listen and emit multiple times on the same event.

//below, response is the event, followed by callback function that handles event occuring
customEmitter.on('response', ()=>{
    console.log(`data received`);
});
customEmitter.on('response', (name, id)=>{
    console.log(`some other logic here ${name}, and ${id}`);
});

customEmitter.emit('response');

//you can also emit multiple arguments after the event, which are taken in as arguments to the listen
customEmitter.emit('response', 'Jack', 21);

