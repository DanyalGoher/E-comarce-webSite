var magnified_area = document.getElementById("magnified-area");
var img_change = document.getElementById("img_change");

magnified_area.addEventListener("mousemove",function(){
    clientx = event.clientx - magnified_area.offsetLeft
    clienty = event.clienty - magnified_area.offsetTop

    mwidth = magnified_area.offsetWidth
    mheight = magnified_area.offsetHeight

    clientx = clientx / mwidth * 100
    clienty = clienty / mheight* 100
    img_change.style.transform = 'translate(-'+clientx+'%,-'+clienty+'%) scale(2)';
   // img_change.style.transform = 'translate(-50%,-50%) scale(2)';
})
magnified_area.addEventListener("mouseleave",function(){
    img_change.style.transform = 'none';
})

