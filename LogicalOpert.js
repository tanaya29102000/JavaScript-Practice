//AND OR NOT
//AND All Condition must be true....

const age = 22;
const gender ='female';

// if (age >= 18 && gender == 'female' && false){
//     console.log('You are adult female')
// }

//OR A tleast one condition should true(||)

if (age >= 18 || gender == 'female'){
    console.log('You are adult female')
}

//NOT 
//true ko false krta hai or false ko true
const number = 5;

if (number % 2 !=0){
    console.log('odd')
}; 