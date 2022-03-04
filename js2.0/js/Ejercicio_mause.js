
elemento = document.getElementById("cont");
elemento.addEventListener("mousemove",evento=>{
var x=evento.clientX;
var y=evento.clientY;
var imagen = document.getElementById("imagen");
        imagen.style.position = "absolute";
        imagen.style.left =(x-30)+"px";
        imagen.style.top =(y+10)+"px";
});

