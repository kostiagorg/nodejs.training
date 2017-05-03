var Emitter = require("events");

var emitter = new Emitter();

//describe events
var eventHello = "hello";
var eventCalc  = "calc";

//add listeners
emitter.on(eventHello, () => {
   console.log("'" + eventHello + "' event has been cought!");
});
emitter.on(eventCalc, (a, b) => {
   console.log("'" + eventCalc + "' event has been cought!");
   var x = a + b;
   console.log("a + b = " + x);
});

//first event
emitter.emit(eventHello);

//second event
emitter.emit(eventCalc, 1, 2);


""

