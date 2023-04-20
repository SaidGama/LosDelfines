let campDescripcion = document.getElementById("campDescrip");
let campNombre = document.getElementById("campNombre");


function validacionCampoID(params) {

}
function validacionCampoNombre(params) {
    if (campNombre.ariaValueMax.length <4 || campNombre.ariaValueMax.length>50){
        campNombre.style.border="solid thin red";
    }else{
        campNombre.style.border="solid thin green";
        return true;
    }//if
}//validar Nombre
function validacionPrecio(params) {
    
}
let Id = document.getElementById("campoId");
let Precio = document.getElementById("CampoPrecios");
let Stock = document.getElementById("valiStock");



function validacionCampoID(campoId) {
    if(campoId.value >2){
     campoId.style.border="solid thin red";
     campoId += "<li>Escribe un numero válido.</li>";  
     campoId.style.display="block";
    }
    if (!/^\d+$/.test(campoId.value)){
        alert("El campo de Id debe contener solo números");
        return false;
    } else{
        campoId.style.border="solid thin green";
        return true;
    }
};


function validacionCampoNombre(params) {
    
}
function validacionPrecio(CampoPrecios) { 
    if(CampoPrecios <1){
       CampoPrecios.style.border="solid thin red";
        CampoPrecios += "<li>Escribe una cantidad valida</li>";
        alertError.style.display="block";
    } else{
        CampoPrecios.style.border="solid thin green";
        return true;
    }
};  

function validacionDescripcion(params) {
    if (campDescripcion.value.length<1 || campDescripcion.value.length>50){
        campDescripcion.style.border="solid thin red";
    }else {
        campDescripcion.style.border="solid thin green";
        return true;
    }//validar la descripción breve con uno y menos de 50 caracteres
}//validacionDescripción 

function validacionDetallestecnicos(params) {
    
}
function validacionStock(params) {
    
}



campNombre.addEventListener("blur", function(event){
    event.preventDefault();
    campNombre.value = campNombre.value.trim();
}); //blur

campDescripcion.addEventListener("blur", function(event){
    event.preventDefault();
    campDescripcion.value = campDescripcion.value.trim();
}); //blur

Id.addEventListener("blur", function(event){
    event.preventDefault();
    Id.value = Id.value.trim();
}); //blur
function validacionStock(valiStock) {
    if(valiStock.value >3){
        valiStock.style.border="solid thin red";
        valiStock += "<li>Escribe un numero válido.</li>";  
        valiStock.style.display="block";
       }
       if (!/^\d+$/.test(valiStock.value)){
           alert("El campo solo contiene números");
           return false;
       } else{
           valiStock.style.border="solid thin green";
           return true;
       }
};



  
  
