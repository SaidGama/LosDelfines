//variables
let correo = document.getElementById("correo");
let IdNombre = document.getElementById("IdNombre");


let correoValido = true;
let nombreValido = true;

function validarNombre() {
    nombreValido = true;
    if(/^[a-zA-Z ]+$/.test(IdNombre.value)==false){
        nombreValido = false;
    } else {
        IdNombre.style.border = "solid thin green";
        return true;
    }
}
function validarCorreo() {
    correoValido = true;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo.value)==false){
        correoValido = false;
    }else{
        correo.style.border = "solid thin green";
        return true;
    }
}
function validarNumero(params) {
    
}
function validarContrasena(params) {
    
}
function validarDireccion(params) {
    
}