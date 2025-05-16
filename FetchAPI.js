//FETCH API
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=> res.text())
.then(data=>console.log(data));

9270103272