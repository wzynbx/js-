const events = require('events')
const util = require('util');
var Person = function (name) {
    this.name = name;
}
util.inherits(Person, events.EventEmitter);//让Person继承EventEmitter类
let xiaoming = new Person('xiaoming');
let lili = new Person('lili');
let lucy = new Person('lucy');
let persons = [xiaoming, lili, lucy];
persons.forEach(person => {
    person.on('speak', (message) => {
        console.log(person.name + " said: " + message);
    })
});
xiaoming.emit('speak', 'hi,I am xiaoming')
lili.emit('speak', 'I\'m lili');
lucy.emit('speak', 'I\'m lucy');
const myemitter = new events.EventEmitter();
myemitter.on('someEvent', function (message) {
    console.log(message);
})
myemitter.emit('someEvent', 'the event was emitted');