const http = require('node:http');
const { serverConfig } = require("./config")
const { PORT, LOCALHOST } = serverConfig

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello from sarvsevak :)\n');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found\n');
    }
});

server.listen(PORT, LOCALHOST, () => {
    console.log(`Server running at http://${LOCALHOST}:${PORT}/`);
});
