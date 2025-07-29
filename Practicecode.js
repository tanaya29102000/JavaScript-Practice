//Q1 Print all even numbers from 0 to 100.

for (let num = 0; num<=100;num++){
    if(num %2 === 0){
        //even number
        console.log("num=",num);
    }
}

//Q2 
let gameNum = 25;
let usrNum = prompt("Guess the game number:");

while(usrNum !== gameNum){//same both
usrNum=prompt("you entered wrong number:");
}

console.log("congrats");


//Strings

let str = "apna clg";
let 