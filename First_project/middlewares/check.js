module.exports = {
	checkLogin(req, res, next) {
		if (req.session.user) {
			console.log('已登陆');
			return;
		}
		next();
	},

	checkNotLogin(req, res, next) {
		if (!req.session.user) {
			console.log('未登陆');
			return;
		}
		next();
	}
};