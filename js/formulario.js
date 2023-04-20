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
    
}
function validacionDetallestecnicos(params) {
    
}
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



  
  
