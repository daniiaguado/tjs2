
var tipoTarjeta = 1;

var limite = 10000;

if (tipoTarjeta = 1) {
    calcularLimite = limite * 0.25;
} else if (tipoTarjeta = 2) {
    calcularLimite = limite * 0.35;
}else if (tipoTarjeta = 3){
    calcularLimite = limite * 0.40;
}else{
    calcularLimite = limite * 0.50;
}

document.getElementById("entradas").innerHTML = "El nuevo limite de la yarjeta del cliente es de : " + calcularLimite + "euros";