var path = require('path'),
	express = require('express'),
	session = require('express-session'),
	MongoStore = require('connect-mongo')(session),
	config = require('config-lite')(__dirname),
	routes = require('./routes/index'),
	winston = require('winston'),
	expressWinston = require('express-winston');

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

// 处理表单上传
app.use(require('express-formidable')({
	uploadDir: path.join(__dirname, 'public/images'), // 上传文件目录
	keepExtensions: true
}));

// 正常请求日志
app.use(expressWinston.logger({
	transports: [
		new (winston.transports.Console)({
			json: true,
			colorize: true
		}),
		new winston.transports.File({
			filename: 'logs/success.log'
		})
	]
}));

// 路由
routes(app);

// 错误请求日志
app.use(expressWinston.errorLogger({
	transports: [
		new winston.transports.Console({
			json: true,
			colorize: true
		}),
		new winston.transports.File({
			filename: 'logs/error.log'
		})
	]
}));

app.listen(config.port, () => {
	console.log(`Listening on port ${config.port}...`);
});
