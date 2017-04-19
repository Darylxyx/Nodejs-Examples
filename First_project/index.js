var path = require('path'),
	express = require('express'),
	session = require('express-session'),
	MongoStore = require('connect-mongo')(session),
	config = require('config-lite')(__dirname),
	routes = require('./routes/index');

var app = express();

// 静态资源目录
app.use(express.static(path.join(__dirname, 'public/images')))
// session中间件
app.use(session({
	name: config.session.key, // 设置 cookie 中保存 session_id 字段名称
	secret: config.session.secret, // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
	resave: true, // 强制更新 session
	saveUninitialized: false, // 设置为 false，强制创建一个 session，即使用户未登陆
	cookie: {
		maxAge: config.session.maxAge // 过期时间，过期后 cookie 中的 session_id 自动删除
	},
	store: new MongoStore({
		url: config.mongodb // 将 session 存储到 mongodb
	})
}));

// 路由
routes(app);

app.listen(config.port, () => {
	console.log(`Listening on port ${config.port}...`);
});