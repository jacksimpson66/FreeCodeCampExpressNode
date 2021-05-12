/* const server = http.createServer((req, res) => {
    res.end('Welcome')
}) */

//Using Event Emitter API
const http = require('http');

const server = http.createServer();
//emits request event when user connects to server
//subscribe to it / listen for it / respond to it

server.on('request', (req, res) => {
    res.end('Welcome');
});

server.listen(5000);