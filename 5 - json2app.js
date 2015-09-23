var qsocks = require('qsocks')
var buildapp = require('buildapp')
var fs = require('fs-extra')
var Promise = require('promise')

function read(filename) {
	return qsocks.Connect().then(function(global) {
		return readJson(filename).then(function(data) {
			return buildapp(global, data, {
				filename: data.properties.qTitle + Date.now(),
				reload: true
			});
		});
	})
};

function readJson(filename) {
	return new Promise(function(resolve, reject) {
		return fs.readJson(filename, function (err, data) {
			return resolve(data)
		})		
	});
};

read(process.argv[2] || 'Telecom Customer Retention.json').then(function() {
	console.log('Done')
})
.catch(function(error) {
	console.log(error)
})
.done(function() {
	process.exit(1)
});