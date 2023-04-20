
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