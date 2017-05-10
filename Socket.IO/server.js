var app = require('express')(),
	server = require('http').createServer(app),
	io = require('socket.io')(server);

app.get('/', (req, res) => {
	res.send('<h1>Hello Socket.IO</h1>');
});

server.listen(8888, () => {
	console.log('listening on 8888...');
});

io.on('connection', (socket) => {
	socket.on('client-msg', (obj) => {
		console.log(obj);
	});

	socket.emit('server-msg', 'Hello Client');
});