//CONDITIONAL STATEMENTS
//IF -ELSE, ELSE IF STATEMENTS


const age = 22

//ladder 
if(age>25){
    console.log("you are adult");
}else{
    console.log("yor are not adult");
}


//ternery operator for one condition

const age2 = 10

let res = age2 >= 18 ? ('Yes') :('NO')

console.log(res)

//SWITH STATEMENTS
//to make multiple switches
const option = 3;

switch(option){
    case 1:
    console.log('namaste')
    break;//only ye statement run hoga
    case 2:
        console.log('hii')
        break;
case 3:
    console.log('gujrati')
    default:console.log("invalid")
}