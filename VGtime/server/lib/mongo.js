var config = require('config-lite')(__dirname),
	mongoose = require('mongoose');

mongoose.connect(config.mongodb);

var bioLength = (val) => {
	if (val.length <= 20) {
		return true;
	}
	return false;
};

var commentLength = (val) => {
	if (val.length <= 50) {
		return true;
	}
	return false;
};

exports.User = mongoose.model('User', {
	name: {type: String, unique: true },
	password: String,
	avatar: String,
	geneder: { type: String, enum: ['m', 'f']},
	bio: { type: String, validate: bioLength }
});

exports.Post = mongoose.model('Post', {
	author: String,
	author_avatar: String,
	name: String,
	cover: String,
	platform: { type: Array, enum: ['PS4', 'PS3', 'PSV', 'XBONE', 'XB360', '3DS', 'Wii', 'NSwitch']},
	content: String,
	score: { type: Number, index: -1 }
	creat_time: Date
});

exports.Comment = mongoose.model('Comment', {
	author: mongoose.Schema.Types.ObjectId,
	content: String,
	postId: mongoose.Schema.Types.ObjectId,
	create_time: { type: Date, index: -1 }
});