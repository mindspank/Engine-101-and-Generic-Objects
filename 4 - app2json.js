var qsocks = require('qsocks')
var serializeApp = require('serializeapp')
var fs = require('fs-extra')
var Promise = require('promise')

function create(docname) {
		qsocks.Connect({appname: docname})
		.then(function(global) {
			return global.openDoc(docname)
		})
		.then(function(app) {
			return serializeApp(app)
		})
		.then(function(data) {
			return writeJson(data)
		})
		.then(function() {
			return console.log('Done')
		})
		.catch(function(error) {
			console.log(error)
		}).done(function() {
			process.exit(1)
		});		
};

function writeJson(data) {
	return new Promise(function(resolve, reject) {
		fs.writeJson(data.properties.qTitle + '.json', data, function (err) {
			if(err) { return reject(err); }
			return resolve();
		})		
	});
};

create(process.argv[2] || 'Executive Dashboard');