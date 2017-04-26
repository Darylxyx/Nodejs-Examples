module.exports = {
	port: 3000,
	session: {
		secret: 'VGtime',
		key: 'VGtime',
		maxAge: 2592000000
	},
	mongodb: 'mongodb://localhost:27017/VGtime'
};