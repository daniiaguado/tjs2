var zona = 1;
var pesoPaquete = 3000;
var calcularPrecioTotal;

if (pesoPaquete > 5000) {
    document.write("El paquete es superior a 5 kg. No puede ser transportado.");
} else {
    if (zona === 1) {
        calcularPrecioTotal = pesoPaquete * 11;
    } else if (zona === 2) {
        calcularPrecioTotal = pesoPaquete * 10;
    } else if (zona === 3) {
        calcularPrecioTotal = pesoPaquete * 12;
    } else if (zona === 4) {
        calcularPrecioTotal = pesoPaquete * 24;
    } else if (zona === 5) {
        calcularPrecioTotal = pesoPaquete * 27;
    } else {
        document.write("La zona especificada no es válida.");
    }
}

var precioTotal = calcularPrecioTotal /100;
  
document.getElementById("entradas").innerHTML = "El precio del pauqete es de : " + precioTotal + "€"
