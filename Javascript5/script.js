//LOGICAL OPERATORS
//AND -> All condi. must be true(&&)

const age = 22;
const gender = 'male';

if (age>= 18 || 'male');{
    console.log('You are adult male');
}


//OR OPERATORS -> At Least one condition should be true...(||)

const age1 = 22;
const gender2 = 'female';

if(age >= 18 || gender == 'male'){
    console.log('you are adult male');
}


//NOT OPERATORS -> ! TRUE-false AND FALSE -true

const number = 10;

if(!(number / 2 == 0)){//5 -> 0=5 -> !5 -> odd
    console.log('Odd')
}
