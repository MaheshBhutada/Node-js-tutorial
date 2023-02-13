// here EventEmitter is an class .

const EventEmitter = require ('events');

// here we create an customEmitter object for class.
const customEmitter = new EventEmitter();

// here are many method in thisobject like 
// on -> listen for an event.(2)
// emit -> emit an event(when event is call)(1)

customEmitter.on('response', () => {
    console.log('Data Recieved');
})

customEmitter.emit('response');

// In event order is matter because if
// we write variablename.emit at the upside of varname.on 
// then it can't write anything.

customEmitter.on('result',(name,age)=>{
    console.log(`Name of the person is : ${name}`);
    console.log(`Ageof the person : ${age}`);
})

customEmitter.emit('result','Rajiv',18);