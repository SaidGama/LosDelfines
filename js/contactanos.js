let campTelefono = document.getElementById("campTelefono");
let campMensaje = document.getElementById("campMensaje");
let btnEnviar = document.getElementById("btnEnviar");
let ValidaBoton = document.getElementById("ValidaBoton");
let validacionTexto = document.getElementById("validacionTexto");
//const regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
let esvalido = true;
let esvalidoCorreo = true;
let esvalidoNombre = true;
let alerta = "";
let html = `<div class="alert alert-danger fade show" style="display:block;" role="alert" id="validaBoton">
<p id="validacionTexto">Se envio con éxito el correo </p>
</div>`;

//Implementa una función de JavaScript que valide los tipos de entrada y la corrección cuando se presiona el botón Enviar

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    campNombre.innerHTML=""; //limpiar
    let Nombre="Los siguientes campos deben ser llenados correctamente:<ul>";
    if (campNombre.value.length<2){
        campNombre.style.border="solid thin red"; 
        Nombre +="<li>Se debe escribir un nombre válido</li>";
        campNombre.style.display="block";
        esvalidoNombre = false;
    } else{
          campNombre.style.border="";
          esvalidoNombre = true;
    }//if campNombre    
   validarCorreo();
   validarNum();
   validarCampo();
   if (validarCorreo()==true && validarNum()== true && validarCampo()==true && esvalidoNombre == true){
    console.log("ok! lo logramos")

    
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
}

function validarCorreo(){
   // const emailvalido = regex.test (campEmail.value);
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(campEmail.value)==false || esvalidoCorreo==false){
        campEmail.style.border="solid thin red";
        campEmail.style.display="block";
        esvalidoCorreo = false;
     } else {
        campEmail.style.border=" solid thin green";
        esvalidoCorreo = true;
        return true;
     }
};
//if campo telefono //parsein de 10 numeros
function validarNum (){
    if (campTelefono.value.length<10 || campTelefono.value.length>10){
        campTelefono.style.border="solid thin red";   
    }else{
        campTelefono.style.border="solid thin green"; 
        return true;
    }
};//validar telefono

function validarCampo (){
    if (campMensaje.value.length<1 || campMensaje.value.length>300){
        campMensaje.style.border="solid thin red";  
    }else{
        campMensaje.style.border="solid thin green"; 
        return true;
    }
};