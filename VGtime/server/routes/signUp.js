var express = require('express'),
	router = express.Router(),
	sha1 = require('sha1'),
	path = require('path'),
	fs = require('fs');

var UserModel = require('../models/user'),
	CORS = require('../middlewares/cors');

router.post('/', CORS, (req, res) => {
	let { name, password, repassword, gender, bio } = req.fields,
		avatarPath = req.files.avatar.path,
		avatarName = req.files.avatar.name,
		avatar = avatarPath.split(path.sep).pop();
	
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
		if (!avatarName) {
			throw new Error('缺少头像');
		}
		if (password !== repassword) {
			throw new Error('两次输入密码不一致');
		}
		if (password.length < 6) {
			throw new Error('密码至少6个字符');
		}
	} catch(e) {
		// 注册失败，异步删除上传的头像
		fs.unlink(avatarPath);
		return global.sendResponse(res, 400, {errMsg: e.message});
	}

	password = sha1(password);

	let user = {
		name: name,
		password: password,
		gender: gender,
		bio: bio,
		avatar: avatar
	};

	UserModel.createUser(user)
	.then((result) => {
		user = result;
		delete user.password;
		req.session.user = user;

		global.sendResponse(res, 200, {msg: '注册成功'});
	}).catch((err) => {
		fs.unlink(avatarPath);
		global.sendResponse(res, 400, {errMsg: err});
	});

});

module.exports = router;