var express = require('express'),
	router = express.Router(),
	sha1 = require('sha1');

var UserModel = require('../models/user'),
	CORS = require('../middlewares/cors');

router.post('/', CORS, (req, res) => {
	let { name, password, repassword, gender, bio } = req.query,
		avatar = req.files.avatar.path.split(path.sep).pop();
	
	console.log(avatar);
	// 检验参数
	try {
		if (name.length < 1 || name.length > 10) {
			throw new Error('名字请限制在1-10个字符');
		}
		if (['m', 'f'].indexOf(gender) < 0) {
			throw new Error('性别无效');
		}
		if (bio.length > 30) {
			throw new Error('简介请限制在30个字符');
		}
		if (!req.files.avatar.name) {
			throw new Error('缺少头像');
		}
		if (password !== repassword) {
			throw new Error('两次输入密码不一致');
		}
		if (password.length < 6) {
			throw new Error('密码至少6个字符');
		}
	} catch(e) {
		return global.sendResponse(res, 400, {errMsg: e.message});
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