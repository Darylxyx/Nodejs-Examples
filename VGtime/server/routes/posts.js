var express = require('express'),
	router = express.Router();

var	PostsModel = require('../models/posts')
	CORS = require('../middlewares/cors'),


router.get('/', CORS, (req, res) => {
	PostsModel.findPostsList((doc) => {
		res.send(doc);
	});
});

module.exports = router;