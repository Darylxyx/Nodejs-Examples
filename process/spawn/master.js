var child_process = require('child_process');

for (var i = 0; i < 3; i ++) {
	var param = 'param' + i;

	var workerProcess = child_process.spawn('node', ['support.js', param]);

	workerProcess.stdout.on('data', (data) => {
		console.log('stdout: ' + data);
	});

	workerProcess.stderr.on('data', (data) => {
		// console.log('stderr ' + )
		data && console.log('stderr' + data);
	});

	workerProcess.on('exit', (code) => {
		console.log('子进程已结束 ' + code);
	});
}