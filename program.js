class Program {
    constructor() {
      // Initialize any properties of the Program class here
    }
  
    run() {
      console.log('Running program');
    }
  }
  
  class TeacherProgram extends Program {
    constructor() {
      super();
      // Initialize any properties of the TeacherProgram class here
    }
  
    release() {
      console.log('Releasing program');
    }
  }
  
  class StudentProgram extends Program {
    constructor() {
      super();
      // Initialize any properties of the StudentProgram class here
    }
  
    debug() {
      console.log('Debugging program');
    }
  }
  
  // Create a new object of the Program class and assign it to the prototype property of each child class
  TeacherProgram.prototype = Object.create(Program.prototype);
  StudentProgram.prototype = Object.create(Program.prototype);
  
  // Validate if the respective functions are available in each child class object
  const teacherProgram = new TeacherProgram();
  console.log(teacherProgram.run); // Output: function run() {...}
  console.log(teacherProgram.release); // Output: function release() {...}
  console.log(teacherProgram.debug); // Output: undefined
  
  const studentProgram = new StudentProgram();
  console.log(studentProgram.run); // Output: function run() {...}
  console.log(studentProgram.release); // Output: undefined
  console.log(studentProgram.debug); // Output: function debug() {...}
  