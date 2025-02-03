//ARROW FUNCTIONS

//1. SYNTAX
// const sayHello = () => {
// //Arrow Functions
//     console.log("Hello");
// };

// //const add = (a, b)=>{
// //return a + b;
// //};

// const addV2 = (a, b)=> a + b;//One Liner
// console.log(addV2(2,3));

// //2. ARGUMENTS KEYWORD
// const addNumbers = (...nums) =>{
//     console.log(nums);
// };

// addNumbers(10, 22, 33, 44, 5);

//3. HOISTING
sayHello();

const sayHello =()=>{
    console.log('HEYY THERE');
}

//4. THIS KEYWORD
const obj ={
    value: 20,
    myFunction: ()=>{
        console.log(this);
    },
};

obj.myFunction();
