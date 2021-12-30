const EventEmitter = require('events');

const url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message) {
        // Send an HTTP request
        console.log(message);

        this.emit('messageLogged',
            {id: 1, url});
    }
}

// Export the log function
// module.exports.logMessage = log;

// Export just the log function
module.exports = Logger;
