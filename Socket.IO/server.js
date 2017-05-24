var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io')(server),
	port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/client'));

io.on('connection', (socket) => {
	// console.log('a user connected，id: ' + socket.id);

	let user = '游客' + socket.id.substring(0, 6);
	
	//通知用户进入
	io.local.emit('user conncet', user + '进入聊天室');

	//向客户端发送消息
	socket.on('client message', (data, cb) => {
		// console.log(data);
		cb('recieved');
		data.author = user;

		//广播给除自己以外的客户端
		socket.broadcast.emit('server message', data);
	});

	//通知用户离开
	socket.on('disconnect', () => {
		// console.log('user disconnected');
		io.local.emit('user disconnect', user + '离开聊天室');
	});

	// io.clients((err, clients) => {
	// 	if (!err) console.log(clients);
	// });
});

server.listen(port, () => {
	console.log('listening on %d...', port);
});
