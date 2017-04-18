var express = require('express'),
	app = express(),
	indexRouter = require('./routes/index.js'),
	userRouter = require('./routes/user.js');

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(3000);