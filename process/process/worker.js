// const http = require('http');

// const server = http.createServer((req, res) => {
// 	res.writeHead(200, { 'Content-Type': 'text/plain' });
// 	res.end(`handled by Worker, pid is ${process.pit}`);
// });

process.on('message', (m, tcp) => {
	if (m === 'server') {
		tcp.on('connection', (socket) => {
			// server.emit('connection', socket);
			socket.end(`handled by Worker, pid is ${process.pid} \n`);
		});
	}
});