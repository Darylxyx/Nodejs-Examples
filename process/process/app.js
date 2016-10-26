//***Nodejs中的进程***
process.stdin.resume();
process.stdin.on('data', (data) => {
	process.stdout.write('进程接收到数据：' + data);
});

process.argv.forEach((item, index) => {
	console.log(index + ':' + item);
});


//process命令(REPL环境)

//*方法:
// 1. process.memoryUsage(); rss: 运行Node应用程序的进程内存消耗量，单位字节；heapTotal: V8所分配的内存量；heapUsed: V8内存消耗量

// 2. process.nextTick(); 用于将一个函数推迟调用

// function foo() { console.log('foo') }; 后
// setTimeout(foo, 0); 等同于 process.nextTick(foo);
// console.log('bar'); 先

// 区别在于nextTick方法中指定的函数调用速度要比setTimeout快很多

// 例：
// var fs = require('fs');
// function finish() { console.log('文件读取完毕') }; 后
// process.nextTick(finish);
// console.log(fs.readFileSync('./app.js').toString()); 先

// 由于nextTick可用来将一个函数推迟到代码中所编写的下一个异步方法的事件回调函数开始执行时调用，因此可以使用nextTick方法指定两个耗时操作同步进行。
// 例：
var http = require('http'),
	fs = require('fs');

var opts = {
	host: 'pageant-cdn.kankanapp.com.cn',
	path: '/KanKan.mp4',
	port: 80,
	method: 'GET'
};

var req = http.request(opts, (res) => {
	res.on('data', (data) => {
		console.log('Task_1 接收到的数据字节数：' + data.length);
	});
	res.on('end', () => {
		console.log('Task_1 数据接收完毕');
	});
});
req.end();

process.nextTick(secondTask);
function secondTask() {
	var opts = {
		host: 'pageant-cdn.kankanapp.com.cn',
		path: '/KanKan.mp4',
		port: 80,
		method: 'GET'
	};

	var req = http.request(opts, (res) => {
		res.on('data', (data) => {
			console.log('Task_2 接收到的数据字节数：' + data.length);
		});
		res.on('end', () => {
			console.log('Task_2 数据接收完毕');
		});
	});

	req.end();
}

// nextTick递归
// process.maxTickDepth = 1000 
// process.nextTick(function foo() {
// 	process.nextTick(foo);
// });

// 3. abort(); 用于向运行Node.js应用程序的进程发出SIGABRT信号，使进程异常终止，同时产生一个核心文件。

// 4. chdir(directory); 用于修改Node.js应用程序中使用的当前工作目录 (***工作目录与node执行目录不相同，工作目录变化，终端里的目录不变***)

// 5. cwd(); 用于返回当前目录

console.log('当前目录：' + process.cwd());
process.chdir('../');
console.log('上级目录：' + process.cwd());

// 6. exit([code]); 用于退出运行Node.js应用程序的进程，code:0表示正常退出，默认为0;
// process.exit();

// .............
