var WebSocketServer = require('ws').Server;

wss = new WebSocketServer({port: 8181});
console.log(wss);
wss.on('connection', (ws) => {
	console.log('Connecting...');

	wss.on('message', (msg) => {
		console.log(msg);
	});

});