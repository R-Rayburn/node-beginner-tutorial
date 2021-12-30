
const http = require('http');

// server is an event emitter
const server = http.createServer((req, res) => {
    // Wouldn't be used in real world app.
    // Express would be used here.
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]))
        res.end();
    }
});

// Very low level
// server.on('connection', socket => {
//     console.log('New Connection');
// });

server.listen(3000);

console.log('Listening on port 3000...');
