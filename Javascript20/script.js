const button = document.getElementById("clickButton");

const username = document.getElementById("username");

button.addEventListener('click', ()=>{
    const value = username.value;
    localStorage.setItem('name',value);//setItem to set value
})

window.addEventListener("load", ()=>{
    const value = localStorage.getItem("name");
    username.innerText=value;
})