//Define a callbak function

function greeting(name){
    console.log('Hello,' + name);

}

//Define a funtion that takes a callback 

function processUserInput(callback){
    var name = prompt('Please enter your name.');
    callback(name);
}

//call the function with the callback

processUserInput(greeting);//see this way to callback work

