//AND | OR | NOT
//AND->  All Condition must be true....

const age = 22;
const gender ='female';
//Single = equal to mean to assign its value
//If u write & one time it is bitwise and i want to use &&

// if (age >= 18 && gender == 'female' && false){(== to check its equal or not)
//     console.log('You are adult female')
// }

//OR At least one condition should be true(||)
if (age >= 18 || gender == 'female'){
    console.log('You are adult female')
}

//NOT 
//true ko false krta hai or false ko true
const number = 5;

if (number % 2 !=0){
    console.log('odd')
}; 