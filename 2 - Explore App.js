var qsocks = require('qsocks')

qsocks.Connect()
.then(function(global) {
	return global.openDoc('Qlik Employees.qvf')
})
.then(function(app) {
	return app.getScript()
})
.then(function(script) {
	return console.log(script);
})