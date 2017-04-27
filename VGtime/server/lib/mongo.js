var config = require('config-lite')(__dirname),
	mongoose = require('mongoose');

mongoose.connect(config.mongodb);

exports.Posts = mongoose.model('post', {
	name: String,
	platform: { type: Array, enum: ['PS4', 'PS3', 'PSV', 'XBONE', 'XB360', '3DS', 'Wii', 'NSwitch']},
	time: String
});