//HIGHER ORDER FUNCTIONS AND CALLBACK FUNCTIONS

//A FUNCTION THAT TAKES A FUNCTION AS AN ARGUMENT
function add(a, b, cb){//HOC Fn
    let result = a + b;
    cb(result);  
}


return ()=> console.log(result);


let resultFunction = add(2, 4, ()=> {});
resultFunction();


