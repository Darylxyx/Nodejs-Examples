var path = require('path'),
	fs = require('fs'),
	sha1 = require('sha1'),
	express = require('express'),
	router = express.Router();

var UserModel = require('../models/user'),
	CORS = require('../middlewares/cors');

router.post('/', CORS, (req, res, next) => {
	// console.log(req.fields);
	var { name, password, repassword, gender } = req.fields,
		avatar = req.files.avatar.path.split(path.sep).pop();
	res.send(avatar);
});

module.exports = router;