var app = require('express')(),
	http = require('http').Server(app),
	io = require('socket.io')(http);

app.get('/', (req, res) => {
	res.send('<h1>Hello Socket.IO</h1>');
});

http.listen(8888, () => {
	console.log('listening on 8888...');
});

io.on('connection', (socket) => {
	socket.on('client-msg', (obj) => {
		console.log(obj);
	});

	socket.emit('server-msg', 'Hello Client');
});