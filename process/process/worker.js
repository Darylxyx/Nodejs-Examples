#!/user/bin/env node
setTimeout(() => {
	process.send({foo: 'bar'});
}, 1000);

process.on('message', (m) => {
	console.log(m);
});
