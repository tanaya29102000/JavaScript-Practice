//OBJECT

let student = {
    rollNo: 23,
    name:'Tanaya kanerkar',
    course: 'computer science'
};

console.log(student);
console.log(student.name);
console.log(student['rollNo']);

console.log(typeof student);//object


delete student.course;
console.log(student);
student.year = 'second';
console.log(student);    


