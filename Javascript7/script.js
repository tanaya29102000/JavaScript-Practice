//functions -> Functions are a reusable block of code 

// function multiply(a, b){
//     return a * b;
// }

// let a = add(10,9)
//     console.log("That hey user result is", a)

//     add()

//unlimited Arguments accept 
function addNumbers(){
    let ans = 0 
    for(let i =0; i< arguments.length; i = i + 1){
    ans = ans + arguments[i]
}
return ans
}

let result =addNumbers(10,22,31,42,55,100)
console.log(result)