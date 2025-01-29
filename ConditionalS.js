//IF ELSE
//AGR APKO KOI TASK PERFORM KRNA HAI TO IF ELSE CONDITION USE KRENGE
// u apply multiple else iff
const age = 22;

if (age >= 18) {
  console.log("Yes , you can vote");
} else if (age >= 80) {
  console.log("Yes, you are an adult");
} else {
  console.log("No,you cannt vote");
}

//Ternary Operator

// const age1 = 90;
// let result = age >= 18 ? console.log('Yes'): console.log('No')

let result = age >= 18 ? "Yes" : "No";

console.log(result);

//SWITCH CASE STATEMENTS

const option = 1;

switch (option) {
  case 1:
    console.log("Namaste");
    break;
  case 2:
    console.log("Hello");
  default:
    console.log("Invalid option");
}

// Another example statements
let a = 30;
let opt = '+'
let b = 40

switch(opt){
    case '+': console.log(a+b);
    break;
    case '-': console.log(b-a);
    break;
    case '*': console.log('a*b');
    break;
    default:console.log('IDK')
}