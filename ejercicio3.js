let nombre1=prompt("introdusca el nombre");
let edad1=Number( prompt("edad"));

let nombre2=prompt("introdusca el nombre");
let edad2=Number( prompt("edad"));

let nombre3=prompt("introdusca el nombre");
let edad3=Number( prompt("edad"));
 
let mayor= Math.max(edad1, edad2, edad3);
   if(mayor==edad1){ 

    document.write("El mayor es: " + nombre1);
   }
   if(mayor==edad2){ 

    document.write("El mayor es: " + nombre2);
   }
   if(mayor==edad3){ 

    document.write("El mayor es: " + nombre3);
   }
   