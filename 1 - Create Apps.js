const qsocks = require('qsocks');
const Promise = require('bluebird');

qsocks.Connect()
.then(function(global) {
	
	//We now have a global handle - lets create some apps!
	
	for (var index = 0; index < 50; index++) {
		global.createApp('ConsultingPresentation' + index + '.qvf')
	}
	
});