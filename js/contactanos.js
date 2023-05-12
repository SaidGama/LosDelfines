
let campTelefono = document.getElementById("campTelefono");
let campMensaje = document.getElementById("campMensaje");
let campEmail = document.getElementById("campEmail");
let campNombre = document.getElementById("campNombre");
let btnEnviar = document.getElementById("btnEnviar");
let ValidaBoton = document.getElementById("ValidaBoton");
let validacionTexto = document.getElementById("validacionTexto");
let btnClear = document.getElementById("Limpiar");
//const regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
let esvalido = true;
let esvalidoCorreo = true;
let esvalidoNombre = true;
let alerta = "";
let alertError = document.getElementById("alertError");
let alertErrorTexto = document.getElementById("alertErrorTexto");
let idTimeout;
let html = ""
//Implementa una función de JavaScript que valide los tipos de entrada y la corrección cuando se presiona el botón Enviar
4

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    // esvalidoNombre = true;
    // esvalidoCorreo = true;
    clearTimeout(idTimeout);
    alertErrorTexto.innerHTML="";
    alertError.style.display="none";
    let Nombre= "Los siguientes campos deben ser llenados correctamente:<ul>";
    
    if (campNombre.value.length<2){
        campNombre.style.border="solid thin red"; 
        Nombre += "<li>Escribe un nombre válido.</li>";
        campNombre.style.display="block";
        // esvalidoNombre = false;
    } else{
          campNombre.style.border="solid thin green";
          
    }//if campNombre    
//    validarCorreo();
//    validarNum();
//    validarCampo();
    if(!validarCorreo()){
        campEmail.style.border="solid thin red";
        Nombre += "<li>Escribe un email válido.</li>";
        alertError.style.display="block";
        // alertErrorTexto.innerHTML="Escribe un nombre válido"
    }else{
        campEmail.style.border="solid thin green";
    }//if correo

    if (!validarNum()){
        campTelefono.style.border="solid thin red";
        Nombre += "<li>Escribe un número de teléfono válido.</li>";
        alertError.style.display="block";
        // alertErrorTexto.innerHTML="Escribe un número de teléfono válido"
    }else{
        campTelefono.style.border="solid thin green";
    }//if teléfono

    if (!validarCampo()){
        campMensaje.style.border="solid thin red";
        Nombre += "<li>Escribe un mensaje.</li>"
        alertError.style.display="block";
        // alertErrorTexto.innerHTML="Escribe un mensa válido"
    }else{
        campMensaje.style.border="solid thin green";
    }
    Nombre += "</ul>";
    alertErrorTexto.insertAdjacentHTML("beforeend", Nombre);
    idTimeout=setTimeout (function(){
        alertError.style.display="none";
        ValidaBoton.style.display="none";
    }, 5000);

 //btnlimpiar click

   if (validarCorreo()==true && validarNum()== true && validarCampo()==true && esvalidoNombre == true){

    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "saidgama@gmail.com", 
        Password : "562FD858F053C7F688C2020A3B889C97A8D4",
        To : 'basura0970@gmail.com',
        From : "sgamap8@gmail.com",
        Subject : "buzon de quejas y sugerencias",
        Body : (" Nombre: " + campNombre.value + " Correo :" + campEmail.value + " Telefono: " + campTelefono.value + " Mensaje: " + campMensaje.value)
    }).then(
      message => mostrarValidacion()
    );
   }
    

});// btnEnviar click
function mostrarValidacion(){
    ValidaBoton.style.display="block";
    validacionTexto.insertAdjacentHTML("afterend", html);
    campNombre.value="";
    campEmail.value="";
    campTelefono.value="";
    campMensaje.value="";
}

function validarCorreo() {
    esvalidoCorreo = true; // Establecer como verdadero al inicio de la validación
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(campEmail.value) == false) {
        esvalidoCorreo = false;
    } else {
        campEmail.style.border = "solid thin green";
    }
    return esvalidoCorreo; // Retornar el valor de esvalidoCorreo
}

//if campo telefono //parsein de 10 numeros
function validarNum (){
    if (/^(?!.*(.)\1{4})\d{10}$/.test(campTelefono.value) == false) {
        campTelefono.style.border = "solid thin red";
        return false;
    } else {
        campTelefono.style.border = "solid thin green";
        return true;
    }// if else
}//validar telefono

function validarCampo (){
    if (campMensaje.value.length<1 || campMensaje.value.length>300){
        campMensaje.style.border="solid thin red";  
    }else{
        campMensaje.style.border="solid thin green"; 
        return true;
    }
}

btnClear.addEventListener("click",function(event){
    event.preventDefault();
    campNombre.value="";
    campEmail.value="";
    campTelefono.value="";
    campMensaje.value="";
});//btn limpiar

campMensaje.addEventListener("blur", function(event){
    event.preventDefault();
    campMensaje.value = campMensaje.value.trim();
}); //blur

campNombre.addEventListener("blur", function(event){
    event.preventDefault();
    campNombre.value = campNombre.value.trim();
}); //blur