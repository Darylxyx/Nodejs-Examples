const cp = require('child_process');
const cpus = require('os').cpus();
for (let i = 0, max = cpus.length; i < max; i++) {
	// fork('./work.js');
	// cp.spawn('node', ['work.js']);
	// cp.exec('node work.js', (err, stdout, stderr) => {
	// 	console.log(err);
	// });
	// cp.execFile('work.js', (err, stdout, stderr) => {
	// 	console.log(err);
	// });
}