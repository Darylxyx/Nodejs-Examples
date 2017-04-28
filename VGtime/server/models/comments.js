var Comment = require('../lib/mongo').Comment;

module.exports = {
	findCommentsById(postId) {
		return Comment
				.find({postId: postId})
				.exec();
	},
	createComment(data, cb) {
		return Comment.create(data);
	},
	deleteComment(commentId, cb) {
		return Comment.findByIdAndRemove(commentId).exec();
	}
}