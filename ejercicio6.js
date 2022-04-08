let cadena = prompt("Introduce un Texto que contenga paréntesis:");
    let longnum = cadena.length;
    let j;
    let car;
    let mostrar = "";
    let copiar = false;
        
	for (j = 0; j < longnum; j++) {
		car = cadena.charAt(j);    
		if (car == ")") {
            copiar = false;
        }
        if (copiar) {
            mostrar = mostrar + car;
        }
        if (car == "(") {
                copiar = true;
        }
    }
    document.write(mostrar);