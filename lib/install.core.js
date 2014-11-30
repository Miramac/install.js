var fs = require('fs')
;

function install(options) {
	options = (typeof options !== 'string') ? options : { json: options };
	fs.readFile(options.json, function(err, data) {
		if(err) throw err;
		options.conf = JSON.parse(data);
	});
}