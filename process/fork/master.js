var child_process = require('child_process');

for (var i = 0; i < 3; i ++) {
	var param = 'param' + i,
		workerProcess = child_process.fork('support.js', [param]);

	workerProcess.on('close', (code) => {
		console.log('子进程已退出：' + code);
	});
}