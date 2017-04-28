var Post = require('../lib/mongo').Post;

module.exports = {
	findPostsList() {
		return Post
				.find()
				.sort('-score')
				.select('_id name score cover platform')
				.exec();
	},
	findPostDetail(postId) {
		return Post
				.findById(postId)
				.select('_id name score cover platform content author author_avatar')
				.exec();
	}
};