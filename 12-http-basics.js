const http = require('http');

//req and res are objects
//res.write writes back for the request, as does res.end (which is required)
//req.url is the requested url path
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log('Home Page Accessed');
        res.end('Welcome to our home page');
    }
    else if(req.url === '/about') {
        console.log('About Page Accessed');
        res.end('About');
    }
    else {
        console.log('404 Error');
        res.statusCode = 404;
        res.end('This page does not exist!');
    };
});

//listen on a port
server.listen(5000);
console.log('listening...');
