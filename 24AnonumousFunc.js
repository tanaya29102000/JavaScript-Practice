//Syntax

(function (){
    //function body
});

//Example as a callback
setTimeout(function(){
    console.log("This is anonymous");

}, 1000); //run after 1 sec

//Assigned to a variable

const add = function(a, b){
    return a + b;
};
console.log(add(2,3));//output:5