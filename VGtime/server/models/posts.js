var Post = require('../lib/mongo').Post;

module.exports = {
	findPostsList(cb) {
		return Post
				.find()
				.sort('-score')
				.exec();
	}
}