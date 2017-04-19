var config = require('config-lite')(__dirname),
	Mongolass = require('mongolass'),
	mongolass = new Mongolass();

mongolass.connect(config.mongodb);

exports.User = mongolass.model('User', {
	name: { type: 'string' },
	password: { type: 'string' },
	avatar: { type: 'string' },
	gender: { type: 'string', enum: ['m', 'f'] },
	bio: { type: 'string' }
});

exports.User.index({ name: 1 }, { unique: true }).exec();