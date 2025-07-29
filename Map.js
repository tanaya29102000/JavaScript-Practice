//MAP METHODS
//Create a new array with the results of some operatons.The value its callback returns  used to form new array
//callback means its value (val - its parameter u want to pass).

arr.map(callBackFnx(value))

let newArr = arr.map((val)=>{
    return val*2;
})


//1 using map return callback value

let nums = [2,4,6,7,8];
nums.map((val)=>{
    console.log(val);
})//2 4 6 7 8(callback return value)


//2 using map return new array store value in newarray(copy of array)

let newarray = nums.map((val)=>{
    return val;
});

console.log(newarray);
