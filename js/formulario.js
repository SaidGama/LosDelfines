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
    
}
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