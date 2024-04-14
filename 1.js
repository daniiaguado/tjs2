
    var hamburguesa = "sencilla";
    var precio;
  
    if (hamburguesa === "sencilla") {
      precio = 20;
    } else if (hamburguesa === "doble") {
      precio = 25;
    } else {
      precio = 28;
    }
  
    document.getElementById("entradas").innerHTML = "El precio de la hamburguesa es de $" + precio;
