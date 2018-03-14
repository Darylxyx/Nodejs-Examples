var WebSocketServer = require('ws').Server;

wss = new WebSocketServer({port: 8181});

wss.on('connection', (ws) => {
	console.log('Connecting...');

	ws.on('message', (msg) => {
		console.log(msg);
	});

	setInterval(function() {
		ws.send('Now time is' + new Date);
	}, 3000);

});