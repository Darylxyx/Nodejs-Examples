var express = require('express'),
	router = express.Router();

var	PostsModel = require('../models/posts')
	CommentsModel = require('../models/comments'),
	CORS = require('../middlewares/cors'),

router.get('/', CORS, (req, res) => {
	PostsModel.findPostsList().then((doc) => {
		res.send(doc);
		// CommentsModel.findCommentsById('5900538a5b22110d6b6cc390').then((doc1) => {
		// 	res.send(doc1);
		// }).catch();
	}).catch();
});

module.exports = router;