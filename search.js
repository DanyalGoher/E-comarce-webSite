function searchfun(){
    let filter = document.getElementById('myInput').value.toUpperCase();
    let items = document.querySelectorAll('.box');
    let l = document.getElementsByTagName('p');

    for(var i=0; i < l.length; i++){
        let p = items[i].getElementsByTagName('p')[0];
        let value = p.innerHTML || p.innerText || p.textContent;
        if(value.toUpperCase().indexOf(filter) > -1){
         
                items[i].style.display = "block";
            }
            else{
                items[i].style.display = "none";
            }
        }
    }
