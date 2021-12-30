
// Every file is a module
// console.log(module);

// Loading in Logger module
// Needs to be constent to avoid overriding
// const logger = require('./logger')

// When exporting as an object
// console.log(logger);
// logger.logMessage('message');

// When exporting just a function
// logger('message');

const Logger = require('./logger');
logger = new Logger();

logger.on('messageLogged',
        arg => console.log('Listener called', arg));

logger.log('message');

