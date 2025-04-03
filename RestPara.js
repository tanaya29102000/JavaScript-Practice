//Reast parameter are opposite to spread Operator 
//rest parameter are used to combine all values

const nums1 = [1,2,3,4]

function add (a,b,c,...nums){
    console.log(a,b,c);
    console.log('nums:',nums);
    // let sum= 0
    // for(let i =0; i <nums.length;i++){
    //     sum = sum+ nums[i]
    // }
    // return sum
}

const result =  add (8,9,56)