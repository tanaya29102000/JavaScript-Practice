//Arrow functions 

// 1. Normal function Syntax (arguments are available in normal fn)

// function sayHello(){
//     console.log('hiii')
// }


// // Arrow Function syntax(arguments are not availble in arrow fn,  u can use spread operator)

// const sayHello = () => {
//     console.log('hii')
// };


// //one liner arrow functions 
// const addV2 = (a, b) => a+ b;
// console.log(2,4);

// // 2. 'arguments' keyword

// function addNumbers(){
//     console.log(arguments);
// }

// addNumbers(10,4,6,7,8);

// 3. Hoisting - > available in normal fn not in arrow fns 

// sayHey();

// const sayHey = ()=> {
//     console.log('hey there')
// };



// 4. This Keyword

const obj = {
    value:20,
    myFunc: function (){
        console.log(this);
    },
};

obj.myFunc()

