var app = require('express')(),
	server = require('http').createServer(app),
	io = require('socket.io')(server);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/client.html');
});

io.on('connection', (socket) => {
	console.log('a user connected.');

	socket.on('client message', (data) => {
		console.log(data);
		io.emit('server message', data);
	});

	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

server.listen(8888, () => {
	console.log('listening on 8888...');
});
