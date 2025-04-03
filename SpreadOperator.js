//3.Spread Operator- is used to expand or spread an array or object

//Basically we want to combine to array or two object we used ...


const nums1 = [1,2,3,4]
const num2 =  [5,6,7,8,9]

console.log(nums1.concat(num2));
// const joinArray = nums1.concat(num2)
// const joinArray = [...nums1,...num2]
 
//run - node SpreadOperator.js
//output: [1,2,3,4,5,6,7,8,9]

//-------------------------------------------------------------------------

// const user = {
//     name:'Tanaya',
//     age:24,
// }

// const updatUser = {...user, city:'Pune'}


//--------------------------------------------------------------------

function add(){
    let sum= 0
    for(let i =0; i<arguments.length; i++){
        sum = sum + arguments[i]
    }
    return sum
}