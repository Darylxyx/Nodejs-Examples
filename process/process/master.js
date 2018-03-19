const fork = require('child_process').fork;
const cpus = require('os').cpus();
for (let i = 0, max = cpus.length; i < max; i++) {
	fork('./work.js');
}