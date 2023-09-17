x = 1;
function decc(){
    if(x>1){
    x--;
    document.getElementById("change").innerHTML=x;
    }
}
function incc(){
    x++;
    document.getElementById("change").innerHTML=x;
}

function fng_1(){
    let image = document.getElementById("img_change");
    let replace = document.getElementById("img-1");
    image.src= replace.src;
}

function fng_2(){
    let image = document.getElementById("img_change");
    let replace = document.getElementById("img-2");
    image.src= replace.src;
}

function fng_3(){
    let image = document.getElementById("img_change");
    let replace = document.getElementById("img-3");
    image.src= replace.src;
}

function valueChange(){
 
    let replace = document.getElementById("img-1");
    let name = document.getElementById("pro-name");
    let value = document.getElementById("pro-value");

    let cartimage = document.getElementById("cart-image");
  let carttext = document.getElementById("cart-text");
  let cartprice = document.getElementById("cart-price");
  let total = document.getElementById("total");

  cartimage.src= replace.src;
  
  carttext.innerHTML = "HANDY ELECTRIC TAILOR STITCH";
  cartprice.innerHTML = value.innerHTML;
  total.innerHTML = value.innerHTML;
  }
