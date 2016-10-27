// ***创建多进程应用程序***
var cp = require('child_process');

//child_process.spawn(command, [args], [options]); command:指定需要运行的命令 args:数组，存放运行命令的参数 options:对象，指定开启子进程时的选项
var sp1 = cp.spawn('node', ['test1.js', 'one', 'two', 'three']),
	sp2 = cp.spawn('node', ['test2.js', {stdio: 'pipe'}]);

sp1.stdout.on('data', (data) => {
	console.log('子进程标准输出：' + data);
	sp2.stdin.write(data);
});

sp2.on('exit', (code, signal) => {
	console.log('子进程退出，代码：' + code);
	process.exit();
});