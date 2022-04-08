let cadena=prompt("Introdusca el sms");
let tamaño=cadena.length;
let j;
let car;
let invertido="";
for (j = 0; j < tamaño; j++) {
    car = cadena.charAt(j);   
    invertido= car + invertido;
}
document.write(invertido);