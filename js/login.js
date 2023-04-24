//variables
let campNumber = document.getElementById("campNumber");
let contraseña = document.getElementById("contraseña");
let ConfiContraseña = document.getElementById("ConfiContraseña");


function validarNombre(params) {

}
function validarCorreo(params) {}

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
function validarNumero() {
    if (/^(?!.*(.)\1{4})\d{10}$/.test(campNumber.value) == false) {
        campNumber.style.border = "solid thin red";
    } else {
        campNumber.style.border = "solid thin green";
        return true;
    }// if else
}// validarNumero


function validarContrasena() {
    if (/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[a-z]).{8,}$/.test(contraseña.value) == false) {
        contraseña.style.border = "solid thin red";
    } else {
        contraseña.style.border = "solid thin green";
        return true;
    }//if else
}//validarContrasena

//Al menos una letra mayuscula, una minuscula, un número y que sea minimo de 8 digitos

function confirmarContra () {
    if ((contraseña.value == ConfiContraseña.value) == false) {
        ConfiContraseña.style.border = "solid thin red";
    } else {
        ConfiContraseña.style.border = "solid thin green";
        return true;
    }//if else
}// confirmarContra

function validarDireccion(params) {
    
}