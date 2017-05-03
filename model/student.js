var util = require("util");
var Event = require("events");

function Student(name, sname, group) {
   this.name = name;
   this.sname = sname;
   this.group = group;
   
   this.showStudentInfo =  function() {
      console.log("Student '" + this.name + " " + this.sname + "', group " + this.group);
   };
};

Student.prototype.saySomething = function(msg) {
   console.log("Hello mother fucker, I am");

   //it is important to use 'this' in order to invoke defined in constructor function 
   this.showStudentInfo();

   console.log("I am gonna say: '" + msg + "'");
};

module.exports = Student;

//ingerit EventEmitter
util.inherits(Student, Event);

global.eventHello = "hello";

Student.prototype.callYourSelf = function(data) {
   
   //event
   this.emit(eventHello, data);
};

var user = new Student("Banderlogin", "Bachkivski", 620621);

//add event listener
user.on(eventHello, (data) => {
   console.log("EVENT in action: " + eventHello);
   user.saySomething(data);   
});

//let's send event
user.callYourSelf("Programmer");





