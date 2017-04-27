var Comment = require('../lib/mongo').Comment;

module.exports = {
	findCommentsById(postId) {
		return Comment
				.find({postId: postId})
				.exec();
	}
}