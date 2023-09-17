
              /*...Submit Block...*/

const pass = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit', (e) =>{

    if(pass.value.length <6){        
    e.preventDefault()
    }
})
            /*...password Strength...*/

var pas = document.getElementById("password");
var msg = document.getElementById("massege");
var str = document.getElementById("strength");

pas.addEventListener('input', () => {
    if(pas.value.length > 0){
        msg.style.display = "block";
        pas.style.border = "1px solid red";
    }
    else{
        msg.style.display = "none";
        pas.style.border = "none";
    }
    if(pas.value.length < 6){
        str.innerHTML = "week";
        msg.style.color = "red";
    }
    else if(pas.value.length >= 6 && pas.value.length < 8){
        str.innerHTML = "Good";
        pas.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }
    else if(pas.value.length >= 8){
        str.innerHTML = "Strong";
        pas.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
})
