var qsocks = require('qsocks')

qsocks.Connect()
.then(function(global) {
	return global.openDoc('Executive Dashboard.qvf')
})
.then(function(app) {
	return app.getScript()
})
.then(function(script) {
	return console.log(script);
})