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

	// 校验参数
	try {
		if (!req.files.avatar.name) {
			throw new Error('avatar lost');
		}
	} catch(e) {
		fs.unlink(req.files.avatar.path);
		res.send('Register fail');
	}

	password = sha1(password);

	var user = {
		name,
		password,
		repassword,
		gender,
		avatar
	};

	UserModel.create(user)
		.then((result) => {
			res.send(result);
		})
		.catch((e) => {
			fs.unlink(req.files.avatar.path);
			res.send('Register fail');
		});
});

module.exports = router;