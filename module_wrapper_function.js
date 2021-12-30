// (function (exports, require, module, __filename, __dirname) {

    console.log(__filename);
    console.log(__dirname);
    var url = 'http://mylogger.io/log';

    function log(message) {
	console.log(message);
    }

    module.exports = log;

    // Can add to exports this way
    module.exports.log = log;
    exports.log = log;

    // Cannot do below, cause exports is a ref to module.exports
    // exports = log;
// })
