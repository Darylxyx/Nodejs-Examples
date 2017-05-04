var express = require('express'),
	router = express.Router(),
	sha1 = require('sha1');

var UserModel = require('../models/user'),
	CORS = require('../middlewares/cors');

router.get('/', CORS, (req, res, next) => {
	// res.send('Hello Signin');
	let { userName, passWord } = req.query;

	if (!userName || !passWord) return global.sendResponse(res, 400, {errMsg: '请将用户名和密码填写完整'});

	UserModel.getUserByName(userName)
	.then((user) => {
		if (!user) {
			return global.sendResponse(res, 400, {errMsg: '用户名不存在。'});
		}

		if (passWord !== user.password) {
			return global.sendResponse(res, 400, {errMsg: '用户名或密码错误'});
		}

		delete user.password;
		req.session.user = user;
		global.sendResponse(res, 200, user);

	}).catch((err) => {
		global.sendResponse(res, 400, err);
	});
});

module.exports = router;