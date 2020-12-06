console.log("Salud desde el JavScript");

/* Primer funcion en JavaScript Alt+ shift + A*/
/*funcion de escritura desde JS*/

function nombreFuncion(){
    /*instruciones - operaciones de la funcion*/
    document.getElementById("mensajeSaludo1").innerHTML="Hola desde un H1";  
    document.getElementById("mensajeSaludo2").innerHTML="Hola desde un LABEL";   
    document.getElementById("mensajeSaludo3").innerHTML="Hola desde un PARRAFO";
}
function alertMensaje(){
/*let nombre variable*/
    let nameUser=prompt("Bienvenido al sistema, por favor ingrese su nombre:");
    document.getElementById("userName").innerHTML="Ha iniciado sesion correctamente " + nameUser;
}
