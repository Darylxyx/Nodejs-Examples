var child_process = require('child_process');

var imgPath = 'http://img.lexus.do2014.cn/images/es/car/spoke10a/Red_Mica_Crystal_Shine/',
	imgExt = '.jpg!t1024x450.jpg';

for (var i = 0; i < 60; i ++) {
	var workerProcess = child_process.fork('support.js', [imgPath, i, imgExt]);

	workerProcess.on('close', (code) => {
		// console.log('子进程')
	});
}