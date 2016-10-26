var https = require('https'),
	fs = require('fs');


// 使用request请求其他网站
var opts = {
	hostname: 'npmjs.org',
	port: 443,
	path: '/',
	method: 'GET',
	// key: fs.readFileSync('./privatekey.pem'),
	// cert: fs.readFileSync('./certificate.pem'),
	agent: false
};

var req = https.request(opts, (res) => {
	console.log(res.statusCode);
	res.on('data', (data) => {
		console.log('请求到的内容：' + data);
	});
});

req.end();

req.on('socket', (socket) => {
	socket.setTimeout(1000, () => {
		req.abort();
	});
});

req.setTimeout(1000, () => {
	req.abort();
});