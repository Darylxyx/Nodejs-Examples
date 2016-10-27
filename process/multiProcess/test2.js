var fs = require('fs'),
	out = fs.createWriteStream('./message.text');

process.stdin.on('data', (data) => {
	out.write(data);
});

process.stdin.on('end', () => {
	process.exit();
});