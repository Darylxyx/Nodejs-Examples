var express = require('express'),
	router = express.Router();

var UserModel = require('../models/user'),
	CORS = require('../middlewares/cors');

router.get('/', CORS, (req, res, next) => {
	// res.send('Hello Signin');
	let { userName, passWord } = req.query;

	if (!userName || !passWord) return sendResponse(res, 400, {errMsg: '请将用户名和密码填写完整'});

	UserModel.getUserByName(userName)
	.then((user) => {
		if (!user) {
			return sendResponse(res, 400, {errMsg: '用户名不存在。'});
		}

		if (passWord !== user.password) {
			return sendResponse(res, 400, {errMsg: '用户名或密码错误'});
		}

		req.session.user = user;
		sendResponse(res, 200, {msg: 'Signin successfully.'});

	}).catch((err) => {
		sendResponse(res, 400, err);
	});
});


function sendResponse(res, statusCode, doc) {
	var resJSON = {
		statusCode: statusCode,
		result: doc
	};
	res.send(resJSON);
}

module.exports = router;