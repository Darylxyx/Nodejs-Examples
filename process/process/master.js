const cp = require('child_process');
const cpus = require('os').cpus();
const path = require('path');

for (let i = 0, max = cpus.length; i < max; i++) {

	 const n = cp.fork(path.join(__dirname, './worker.js'));
	 n.on('message', (m) => {
	 	console.log('Master get message: ', m.foo);
	 });

	 n.send('Hello worker');


	// cp.spawn('node', ['work.js']);
	// cp.exec('node work.js', (err, stdout, stderr) => {
	// 	console.log(err);
	// });
	// cp.execFile('work.js', (err, stdout, stderr) => {
	// 	console.log(err);
	// });
}