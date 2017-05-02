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



