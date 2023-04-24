//variables
let campNumber = document.getElementById("campNumber");
let contraseña = document.getElementById("Contraseña");
let ConfiContraseña = document.getElementById("ConfiContraseña");


function validarCorreo(params) {}

let correo = document.getElementById("Correo");
let IdNombre = document.getElementById("IdNombre");
let correoValido = true;
let nombreValido = true;
let botonCrear = document.getElementById("botonCrear");

botonCrear.addEventListener("click", function (event) {
    event.preventDefault();
    if (validarNombre()==true && validarCorreo()==true && validarNumero()==true &&
        validarContrasena() ==true) {
            console.log("ok! lo logramos");
    }
});
function validarNombre() {
    nombreValido = true;
    if(/^[a-zA-Z ]+$/.test(IdNombre.value)==false){
        IdNombre.style.border = "solid thin red";
        nombreValido = false;
    } else {
        IdNombre.style.border = "solid thin green";
        return true;
    }
}
function validarCorreo() {
    correoValido = true;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo.value)==false){
        correo.style.border = "solid thin red";
        correoValido = false;
    }else{
        correo.style.border = "solid thin green";
        return true;
    }
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
        ConfiContraseña.style.border = "solid thin red";
    } else {
        contraseña.style.border = "solid thin green";
        if ((contraseña.value !== ConfiContraseña.value)) {
            ConfiContraseña.style.border = "solid thin red";
        } else {
            ConfiContraseña.style.border = "solid thin green";
        }
        return true;
    }//if else
}//validarContrasena

//Al menos una letra mayuscula, una minuscula, un número y que sea minimo de 8 digitos
/*/function confirmarContra () {
    console.log(contraseña.value);
    console.log(ConfiContraseña.value);
    if ((contraseña.value !== ConfiContraseña.value)) {
        ConfiContraseña.style.border = "solid thin red";
    } else {
        ConfiContraseña.style.border = "solid thin green";
        return true;
    }//if else
}// confirmarContra*/

function validarDireccion(params) {
    
}
IdNombre.addEventListener("blur", function(event){
    event.preventDefault;
    IdNombre.value = IdNombre.value.trim();
})
