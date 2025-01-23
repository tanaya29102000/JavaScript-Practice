//Primitive DataType 
//7 types String, Number , Boolean, Null(khali,EMPTY),Undefined, Symbol(kisi value ko unique bnane ke liye),  BigInt(popular now , big value cover by bigint)


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id=== anotherId);

const bigNumber = 345465755868n

//Referenced Type (Non primitive) DataType
//Array, Objects, Functions,
  
const heros = ["shaktiman", "bahubali"]
let myObj =
{
    name:"tanaya",
    age: 24,

}

const myFunction = function(){
console.log("hi tanay");
}

console.log(typeof scoreValue);

//*****************************************************//
//  */