module.exports = {
	port: 3000,
	session: {
		secret: 'FirstBlood',
		key: 'FirstBlood',
		maxAge: 2592000000
	},
	mongodb: 'mongodb://localhost:27017/FirstBlood'
};