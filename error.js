
const pass = document.getElementById('password');
const form = document.getElementById('form');




form.addEventListener('submit', (e) =>{

    if(pass.value.length <8){

        password.style.border = "1px solid red";
        alert("password must be longer then 6 digits!")    
       
    

    e.preventDefault()
    }
})




