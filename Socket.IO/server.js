var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io')(server),
	port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/client'));

io.on('connection', (socket) => {
	// console.log('a user connected，id: ' + socket.id);
	
	//通知用户进入
	io.local.emit('user conncet', '匿名用户'+socket.id.toString().substring(0,6));

	//向客户端发送消息
	socket.on('client message', (data, cb) => {
		// console.log(data);
		cb('recieved');
		data.author = socket.id;

		//广播给除自己以外的客户端
		socket.broadcast.emit('server message', data);
	});

	//通知用户离开
	socket.on('disconnect', () => {
		// console.log('user disconnected');
		io.local.emit('user disconnect', '用户'+socket.id.toString().substring(0,6)+'离开聊天室');
	});

	// io.clients((err, clients) => {
	// 	if (!err) console.log(clients);
	// });
});

server.listen(port, () => {
	console.log('listening on %d...', port);
});
