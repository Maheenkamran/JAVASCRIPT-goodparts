var Student=(function(){
    var Courses=(function(){
        var name="courses";
        var courseName=function(name){
            return 'student is enrolled on ${name} course';};
            return{
                courseName
            };
        }());
        var result=(function(){
            var grade='results';
            var showresult=function(grade){
                return 'student got ${grade} grade in exams';};
                return {
                    showresult
                };
            }());   
        return{
            Courses,
            result
        };
         };
    }());

}
console.log(Student.result.showresult('C'));
console.log(Student.Courses.courseName('web eng'));