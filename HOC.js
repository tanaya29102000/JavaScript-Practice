//HIGHER ORDER FUNCTIONS AND CALLBACK FUNCTIONS--DUSRE FN KO AS PARAMTER LETE USE KRTE HAI YA KISI FN KO RETURN KRTE HAII..
//or HOM - higher order methods...
//A FUNCTION THAT TAKES A FUNCTION AS AN ARGUMENT ko accept kr ske use hoc khte hai.


function add(a, b, cb){//HOC Fn
    let result = a + b;
    cb(result);  
}


return ()=> console.log(result);


let resultFunction = add(2, 4, ()=> {});
resultFunction();


let nums = [2,3,4,5,6];

nums.forEach((num)=>{
    console.log(num*num);//num**2
});

