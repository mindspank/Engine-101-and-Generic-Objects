var qsocks = require('qsocks')
var fs = require('fs')

qsocks.Connect()
.then(function(global) {
	return global.openDoc('Executive Dashboard.qvf')
})
.then(function(app) {
	return app.getObject('BHTXyNM')
})
.then(function(object) {
	return object.getProperties().then(function(properties) {
		return object.getLayout().then(function(layout) {
			fs.writeFileSync('objectlayout.json', JSON.stringify(layout, null, 4), 'utf8')
			fs.writeFileSync('objectproperties.json', JSON.stringify(properties, null, 4), 'utf8')
			console.log('Done')
		})
	})
})
.catch(function(err) {
	console.log(err)
})