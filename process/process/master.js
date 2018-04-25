const http = require('http');
const tcp = require('net');
const cp = require('child_process');
const cpus = require('os').cpus();
const path = require('path');

// for (let i = 0, max = cpus.length; i < max; i++) {

// 	const n = cp.fork(path.join(__dirname, './worker.js'));

// 	// IPC通道
// 	// 全称 Inter-Process Communication，即进程间通信。
// 	n.on('message', (m) => {
// 		console.log('Master get message: ', m.foo);
// 	});

// 	n.send('Hello worker');

// 	// cp.spawn('node', ['work.js']);
// 	// cp.exec('node work.js', (err, stdout, stderr) => {
// 	// 	console.log(err);
// 	// });
// 	// cp.execFile('work.js', (err, stdout, stderr) => {
// 	// 	console.log(err);
// 	// });
// }

const child1 = cp.fork('./worker.js');
const child2 = cp.fork('./worker.js');

console.log('starts.');

const server = tcp.createServer();
server.listen(1337, () => {
	child1.send('server', server);
	child2.send('server', server);
	server.close();
});