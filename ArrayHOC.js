//Arrays

const students = ["Tanya", "Sudhir", "Kanerkar"];

function print(n){
    console.log(n);
}

print("Tanaya");

//students.forEach(print); 

//FOREACH AND MAP DIFFF
students.map((val)=> console.log(val));

//ForEach can not return , map always return

//splice
const numbers = [1,2,3,4,5,6,7];

let newArr = numbers.splice(1, 4);

console.log(newArr);
console.log(numbers);