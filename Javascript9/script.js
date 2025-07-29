//HIGHER ORDER FUNCTIONS AND CALLBACK -> A function that takes a another function as an argument is called 
//with the help of callback we read value 

function add (a, b,cb){//(callabck cb)
    //a,b are two arguments
    let result = a + b; 
    cb(result) ;//callback
}

add(2,4, (val) => console.log(val));
// add(2,4, val => console.log(val));


//OR HOC 

function add (a,b,cb){
    let res = a + b;
    cb (res);

    return () => console.log(result);
}
let resultFunc = add(4,7, () =>{});
resultFunc();

