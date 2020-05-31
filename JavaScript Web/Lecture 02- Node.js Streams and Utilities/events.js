const events = require('events');

const eventEmitter=new events.EventEmitter();

eventEmitter.on('log',(message,data)=>{
    console.log('message ',message);    
    console.log('data ',data);    
})

setTimeout(() => {
    eventEmitter.emit('log','1000 ms finished', 1000);
}, 1000);