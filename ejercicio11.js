function  havilitar()
{
    let campo1 = document.getElementById("nombre");
    let campo2 = document.getElementById("apellido");
    if(campo1.value == 0 && campo2.value == 0){
        boton.disabled =true;
    }
    else{
        boton.disabled = false;
    }
}
