var Comment = require('../lib/mongo').Comment;

module.exports = {
	findCommentsById(postId) {
		return Comment
				.find({postId: postId})
				.exec();
	},
	createComment(data) {
		return Comment.create(data);
	},
	deleteComment(commentId) {
		return Comment.findByIdAndRemove(commentId).exec();
	}
};