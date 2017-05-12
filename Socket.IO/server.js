var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io')(server),
	port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/client'));

io.on('connection', (socket) => {
	console.log('a user connected，id: ' + socket.id);

	// io.clients((err, clients) => {
	// 	if (!err) console.log(clients);
	// });

	socket.on('client message', (data, cb) => {
		// console.log(data);
		cb('recieved');
		data.author = socket.id;
		socket.broadcast.emit('server message', data);
	});

	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

server.listen(port, () => {
	console.log('listening on %d...', port);
});
