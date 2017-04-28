var express = require('express'),
	router = express.Router(),
	sha1 = require('sha1');

var UserModel = require('../models/user'),
	CORS = require('../middlewares/cors');

router.post('/', CORS, (req, res) => {
	var { name, password, repassword, gender, avatar, bio } = req.query;
});

module.exports = router;