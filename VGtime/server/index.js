var path = require('path'),
	express = require('express'),
	session = require('express-session'),
	MongoStore = require('connect-mongo')(session),
	config = require('config-lite')(__dirname),
	routes = require('./routes/index');

var app = express();

// 静态资源目录
app.use(express.static(path.join(__dirname, 'public/images')));

// session中间件
app.use(session({
	name: config.session.key, // 设置cookie中保存session_id字段名称
	secret: config.session.secret, // 通过设置secret来计算hash值并放在cookie中，使产生的signedCookie防篡改
	resave: true, // 强制更新 session
	saveUninitialized: false, // 设置为false，强制创建一个session，即使用户未登陆
	cookie: {
		maxAge: config.session.maxAge // 过期时间，过期后cookie中的session_id自动删除
	},
	store: new MongoStore({
		url: config.mongodb // 将session存储到mongodb中
	})
}));

// 路由
routes(app);

app.listen(config.port, () => {
	console.log(`Listening on port ${config.port}...`);
});