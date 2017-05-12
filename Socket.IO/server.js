var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io')(server),
	path = require('path');

// console.log(io);

app.use(express.static(path.join(__dirname, '/cilent')));

// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, '/client/index.html'));
// });

// io.use((socket, next) => {
// 	// console.log(socket);
// 	next();
// });

io.on('connection', (socket) => {
	console.log('a user connected，id: ' + socket.id);

	// io.clients((err, clients) => {
	// 	if (!err) console.log(clients);
	// });

	socket.on('client message', (data) => {
		// console.log(data);
		data.author = socket.id;
		socket.broadcast.emit('server message', data);
	});

	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

server.listen(8888, () => {
	console.log('listening on 8888...');
});
