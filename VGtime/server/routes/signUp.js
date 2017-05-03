var express = require('express'),
	router = express.Router(),
	sha1 = require('sha1');

var UserModel = require('../models/user'),
	CORS = require('../middlewares/cors');

router.post('/', CORS, (req, res) => {
	let { name, password, repassword, gender, bio } = req.query;

	// 检验参数
	try {
		if (password !== repassword) {
			throw new Error('两次输入密码不一致');
		}
	} catch(e) {

	}

	password = sha1(password);

	let user = {
		name: name,
		password: password,
		gender: gender,
		bio: bio
	};

	UserModel.createUser(user)
	.then((result) => {
		global.sendResponse(res, 200, 'ok');
	}).catch((err) => {
		global.sendResponse(res, 400, err);
	});

});

module.exports = router;