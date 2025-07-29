//1 way to use currying in js without ES6  features

function add(a){
    return function(b){
        return function(c){
            return a + b + c;
        };
    };
}

console.log(add(2)(4)(5));


// 2 way to use curreying in js

function sendAutoEmail(to){
    return function(subject){
        return function(body){
            console.log('sending email to ${to} with subject ${subject} with body ${body}');
        };
    };
}

// 3 way using with ES6 +  features

const sendAutoEmail = to => subject => body => `sending email to ${to} ${subject} : ${body}`;