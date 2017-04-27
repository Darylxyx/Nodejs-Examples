var Post = require('../lib/mongo').Post;

module.exports = {
	findPostsList(cb) {
		return Post
				.find()
				.sort('-score')
				.select('_id name score cover platform')
				.exec();
	},
	findPostDetail(postId) {
		return Post
				.findById(postId)
				.exec();
	}
}