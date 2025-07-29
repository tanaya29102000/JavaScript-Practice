//JSX - Javascript XML

const element = 
<h1>Hello,  React</h1>;

//COMPONENT - 

function Welcome(){
    return <h1>Welcome to React</h1>
}

//USESTATE -

import React , {useState} from "react";

function Counter(){
    const [count, setCount] = useState("");
}

//Array

let fruits = ["apple", "banana","mango"];
console.log(fruits.length);

//Boolean

let isLoggedIn = true;

//CaLlback

function greet(name, callback){
    console.log("Hi", + name);
    callback();
}

//DOM

document.getElementById("title")

//Event

function add(a,b){
    return a + b;

}

//Genrator

function* gen(){
    yield 1;
    yield 2;

}

//Hoisting

console.log(x);
var x = 5;

//Condition Statements- if else

// if (age> 18){
//  let x =
// }

//JSON - 

JSON.stringify(obj);
JSON.parse(json);

//keyword

// let,const,var,return

//LOOP
//for, while

for (let i = 0; i<5; i++){

}

//MAP 

Array.map(item=>item *2)

//NULL

let data = null;

//OBJECT

let user = {
    name:"tanaya",
    age:24
}


//PROMISE

fetch(url).then(...).catch(...);

//Query selector

document.querySelector("#id")

//RETURN

function sum ()
{
    return a + b;
}

//SCOPE

//GLOBAL,BOCK,FUNCTION

//THIS

//UNDEIFNED

//VARIABLE
//LET,CONST,VAR

//WHILE LOOP

while (i < 5){}


//XMLHTTPREQUEST

let xhr = new XMLHttpRequest();

//Yield

function * gen(){
    yield 1;
}


//ZERO

arr[0];