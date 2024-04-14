
let pagoActual = 10; 
let totalPagado = 0;


for (let i = 1; i <= 20; i++) {
  
  totalPagado += pagoActual;


  pagoActual *= 2;


  console.log("Mes " + i + ": " + pagoActual + "€");
}



document.getElementById("salidas").innerHTML = "el total pagado es de: " + totalPagado;