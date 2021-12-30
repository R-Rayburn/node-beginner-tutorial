
const EventEmitter = require('events');
const emitter = new EventEmitter();

// on() == addListener()
emitter.on('MessageLogged',
    arg => console.log(arg));

emitter.emit('MessageLogged',
    { id: 1, url: 'http://' });

emitter.on('logging',
    arg => console.log(arg.message));

emitter.emit('logging', {message: 'Creating new Log'});
