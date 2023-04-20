let campDescripcion = document.getElementById("campDescrip");

function validacionCampoID(params) {

}
function validacionCampoNombre(params) {
    
}
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