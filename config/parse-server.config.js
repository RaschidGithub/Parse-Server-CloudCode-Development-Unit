// Configure your prod and dev databases in the file `databases.json`
const DEV_DATABASE = require('./databases.json').dev;

module.exports = {
	appId: 'appkey',
	masterKey: 'masterkey',
	cloud: './build/cloud/main.js',
	mountPath: '/parse',
	databaseURI: DEV_DATABASE,
	liveQuery: {
		classNames: []
	},
	startLiveQueryServer: true,
	liveQueryServerOptions: {
		appId: 'appkey',
		masterKey: 'masterkey'
	},
	publicServerURL: 'http://localhost:1337/parse',
	appName: 'MyApp',
	emailAdapter: {
		module: 'parse-server-mailgun-adapter-template',
		options: {
			fromAddress: 'postmaster@***REMOVED***.mailgun.org',
			domain: '***REMOVED***.mailgun.org',
			apiKey: '***REMOVED***',

			passwordResetBodyHTML: '<p>Hi,</p><p>You\'ve requested a password reset for your username %username%</p><p>Please follow the link: <a href="%link%">%link%</a></p><p>If you have not requested this action you can just ignore this message.</p>'
		}
	},
	verbose: true,
	jsonLogs: false
}