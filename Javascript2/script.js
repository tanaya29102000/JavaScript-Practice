// Variables are used to store data
// Type of  avriable - let, const, var

//1) var - Global scope
//Re- assign(access anywhere)

// Datatype varName = value; Strongly Typed language(java,c,c++ are strongly type lang)
//Javascript is loosly typed lang(dynamically datatype assign ho jata haii)

// var age = 22//(automatically) var age:number u get bcoz its dynamically type
// var num1 = 10
// var num2 = 13

// console.log(age)
// console.log(num1+num2)

// var age2 = 25

// // console.log(age2)//22 before

// age2 = "tanaya"// At Runtime pe change kii output = tanaya

// console.log(age2)//after

//Its Js behavior bcoz js donot have datatype bcoz its loosly type lang

//---------------//
// var age = 22
// var firstName= "tanaya"

//NAMING CONVENTION
//firstname
//first_name
//FirstName
//firstName(prefered way camelCase for variable)

// age =18
// if(age>16){
//     console.log(age)//call inside the scope
// }

// console.log(age)//call outside the scope
// //bcoz var is global scope they access anywhere

//-------------------//

//2) let - local scope
//Re-assign
//can not access anywhere only in our block scope 

// if(true){
//     let a = 20;
//     console.log(a)
// }

// console.log(a)//bcoz let is local can not access outer scope
// //always prefer let


//----------------------//

//3) const - always local, (used in production)
// can't reassign
//run only once
//can not access anywhere only in our block scope 

// const age = 22

// // age = 30//cant reassign using const assign only once

// console.log(age)

//prefer** let used

