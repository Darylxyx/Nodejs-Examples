 	//***HTTPS服务器***
//HTTP服务器与客户端之间传输的是明文数据，HTTPS服务器与客户端之间传输的是经过SSL安全加密后的密文数据。
//HTTP服务器通常使用80端口或8080端口，而HTTPS服务器使用的是443端口。

//创建HTTPS服务器，需要创建公钥、私钥、证书：

//1. npm install openssl -g
//2. openssl genrsa -out privatekey.pem 1024
//3. openssl req -new -key privatekey.pem -out certrequest.csr (一路回车)
//4. openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
//5. openssl pkcs12 -export -in certificate.pem -inkey privatekey.pem -out certificate.pfx 

var https = require('https'),
	fs = require('fs'),
	pk = fs.readFileSync('./privatekey.pem'),
	pc = fs.readFileSync('./certificate.pem'),
	opts = {
		key: pk,
		cert: pc
	};

var server = https.createServer(opts, (req, res) => {
	if (req.url !== '/favicon.ico') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html><head><meta charset="utf-8" /></head>');
		res.write('Hello HTTPS');
		res.end();
	}
}).listen(2000, '127.0.0.1');

server.on('listening', () => {
	console.log('服务器开始监听');
	// server.close();
});

server.on('close', () => {
	console.log('服务器已被关闭');
});
