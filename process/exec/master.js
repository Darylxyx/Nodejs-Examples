const fs = require('fs'),
	child_process = require('child_process');

// console.log(child_process);

for (var i = 0; i < 3; i ++) {

	var param = 'param' + i;

	var workerProcess = child_process.exec('node support.js ' + param, (error, stdout, stderr) => {
		if (!error) {
			console.log('stdout: ' + stdout);
			console.log('stderr: ' + stderr);
		} else {
			console.log(error);
		}
	});

	workerProcess.on('exit', (code) => {
		console.log('子进程已退出', code);
	});
}