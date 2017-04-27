var Posts = require('../lib/mongo').Posts

module.exports = {
	findPostsList(cb) {
		return Posts
				.find()
				.sort('-score')
				.exec();
	}
}