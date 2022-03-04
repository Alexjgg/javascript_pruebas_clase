//FUNCIONES
var mostra = 0;

var botonMostrar = document.getElementsByName("botonMostrar");
// botonMostrar[0].addEventListener("click", mostrar, false);
/*
botonMostrar[0].addEventListener(
    "click",
    function() {
        console.info("HOLA");
    },
    false);
*/
function mostrar() {
    mostra++;
    console.log("mostra:", mostra);
    var ocultos = document.getElementsByClassName("elementosOcultos");
    ocultos[0].style.display = "block";
    console.log("DENTRO");
}