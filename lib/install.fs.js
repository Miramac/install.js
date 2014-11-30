var fs = require('fs')
, path = require('path')
, ncp = require('ncp').ncp
, install = require('./install.core')
, installFs = {}
;

installFs.copy = function(source, destination, callback) {
	ncp(conf.parse(source), conf.parse(destination), callback);
};

installFs.rm = function(dir, callback) {
	dir = conf.parse(dir);
	try {
		var list = fs.readdirSync(dir);
		for(var i = 0; i < list.length; i++) {
			var filename = path.join(dir, list[i]);
			var stat = fs.statSync(filename);
			if(filename == "." || filename == "..") {
				// pass these files
			} else if(stat.isDirectory()) {
				// rmdir recursively
				rmdir(filename);
			} else {
				// rm fiilename
				fs.unlinkSync(filename);
			}
		}
		fs.rmdirSync(dir);
		callback(null);
	} catch(e) {
		callback(e);
	}
	
}; 
modulde.exports = installFs;