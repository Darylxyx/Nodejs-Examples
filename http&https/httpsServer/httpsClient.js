var https = require('https');


// 使用request请求其他网站
var opts = {
	hostname: 'npmjs.org',
	port: 443,
	path: '/',
	method: 'GET',
	agent: false
};

var req = https.request(opts, (res) => {
	res.on('data', (data) => {
		console.log('请求到的内容：' + data);
	});
});

req.end();