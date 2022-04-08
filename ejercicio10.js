let precio = Number(prompt("Introduce un precio"));
let iva = Number(prompt("Introduce el iva"));
function masIva(precio, iva){
    iva = iva || 21
    let  coniva = (precio + precio*iva/100);
    return coniva;
  }
     let  resultado = masIva(precio, iva);
  document.write("Precio sin iva: " + precio);
  document.write("<br>Precio más Iva: " + resultado);