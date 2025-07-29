//LOOPS

//FOR LOOP ->If you know how many times
for(let i= 1; i<= 10; i = i+1){
    console.log('tanaya'+ i)
}


//WHILE LOOP -> In while loop first check condition then execute code .
let ip = 50
let house = 50

//While(ip != house){
//ip =ip+1;
//console.log('step Taken' + ip}
//}

//DO WHILE LOOP -> In Do While loop first run the code and then check condition
//do{
//ip = ip + 1;
//console.log('Step Taken' + ip)
//}while(ip<= house)

//Guesss the input 

let number = 40;

let guess = 0;

do{
    guess = parseInt("guess a number")
    if (guess == number){

    alert('winner')
    break;
}
}while(guess!=0){
    
}


//for loop- FOR LOGICAL

for(let i=0; i<=5;i ++){
    console.log("Tanaya")
}

for (let count =1 ;count <=5; count++){
    console.log("HELLO");
}


let i =1;
while (i <= 5){
    console.log("i",i);
    i++;
}

//for of loop

let str = "apna clg";
for(let i of str){
    console.log("i", i);
}

//for in loop

let student = {
    name:"ram",
    age:2,
    ispass:true,
}