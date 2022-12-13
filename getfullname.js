function getfullName(){
    var fullname=this.firstname+this.lastname;
    return this.fullname;
}
var obj1={
    firstname: 'Maheen',
    lastname: 'Fatima'
};
var obj2={
    firstname: 'Maheen',
    lastname: 'Kamran'
};
console.log(getfullName.apply(obj2))