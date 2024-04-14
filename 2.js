
var numeroCitas = 6;

var precioCitaActual;

if (numeroCitas < 3) {
    precioCitaActual = 200;
} else if (numeroCitas < 5) {
    precioCitaActual = 150;
}else if (numeroCitas < 8){
    precioCitaActual = 100;
}else {
    precioCitaActual = 50;
}





document.getElementById("entradas").innerHTML = "El precio de la cita actual sera de :" + precioCitaActual + "€";

var citasActuales = 6; 
var pagoTotal = 0;
var contador = 0;

while (contador <= citasActuales) {
    var precioCitaActual; 
    
    if (contador <= 3) {
        precioCitaActual = 200;
    } else if (contador <= 5) {
        precioCitaActual = 150;
    } else if (contador <= 8) {
        precioCitaActual = 100;
    } else {
        precioCitaActual = 50;
    }
    
    pagoTotal += precioCitaActual; 
    contador++;
}

document.getElementById("salidas").innerHTML = "El precio que ha pagado en total por las citas es de " + pagoTotal + "€";
