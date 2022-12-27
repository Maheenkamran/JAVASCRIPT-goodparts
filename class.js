// Define the Class module
const Class = (function() {
    // Private members
    const className = 'Intro to Computer Science';
    let students = [];
  
    // Define the Teacher sub-module
    const Teacher = {
      name: 'Professor Smith',
      teaching: true,
      lecture: function(subject) {
        console.log(`${this.name} is giving a lecture on ${subject}`);
      }
    };
  
    // Define the Notes sub-module
    const Notes = {
      notes: [],
      addNote: function(note) {
        this.notes.push(note);
      },
      getNotes: function() {
        return this.notes;
      }
    };
  
    // Define the Lecture sub-module
    const Lecture = {
      title: 'Introduction to Programming',
      duration: 60,
      start: function() {
        console.log(`Lecture "${this.title}" has started. It will last for ${this.duration} minutes.`);
      }
    };
  
    // Return the public members of the Class module
    return {
      className: className,
      students: students,
      Teacher: Teacher,
      Notes: Notes,
      Lecture: Lecture
    };
  })();
  
  // Create instances of the Class module
  const computerScienceClass = Object.create(Class);
  const mathClass = Object.create(Class);
  
  // Log the members of the Class module
  console.log(computerScienceClass.className);
  console.log(computerScienceClass.students); 
  console.log(computerScienceClass.Teacher.name); 
  console.log(computerScienceClass.Notes.getNotes()); 
  console.log(computerScienceClass.Lecture.title); 
  
  // Modify the members of the Class module
  computerScienceClass.students.push('Alice', 'Bob', 'Charlie');
  computerScienceClass.Teacher.lecture('JavaScript'); 
  computerScienceClass.Notes.addNote('Remember to bring a laptop to class');
  computerScienceClass.Lecture.start(); console.log(computerScienceClass.students); 
  console.log(computerScienceClass.Notes.getNotes()); 
  