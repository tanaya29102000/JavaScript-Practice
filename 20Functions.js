// FUNCTIONS
//Functions are a Block of code that performs a particular task OR BLOCK OF REUSABLE CODE.


function sayHello(){
    console.log('Hey Tanaya')
}

//ARGUMENT OR PARAMETERS
function add (num1, num2){
    console.log(num1 + num2);
}

function multiply(a, b){
    console.log(a * b);
}

multiply(10, 9)
add(5, 10)//parameters
add(2, 8)
add(4, 9)

//UNLIMITED AUGUMENTS
function addNumbers(){
    let ans = 0
    for(let i =0; i < arguments.length; i = i + 1){
        ans = ans + arguments[i]
}
return ans
}


/// WITHOUT USING ARGUMENT ONLY USE SPREAD OPERATOR
function addNumbersV2(...numbers){
    let ans = 0
    for(let i = 0; i < numbers.length; i++){
        ans = ans + numbers[i];
    }
    return ans;
}

let result = addNumbers(10, 23, 89, 100, 35)
console.log(result)


//SPREAD OPERATOR


//----------------------------------------------------------------------------------

//FUNCTION RETURN STATEMENTS

function getPrimeNumber(){
    return 5;
    console.log('after return');//will never execute
}

let prime = getPrimeNumber();
console.log(prime);
