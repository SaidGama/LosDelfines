let btnCrear = document.getElementById("botonCrear");
let arrayProductos = [];



btnCrear.addEventListener("click", function (event) {
    event.preventDefault();

    if (validacionCampoNombre() == true && validacionPrecio() == true && validacionDescripcion() == true
        && validacionDetallestecnicos() == true && validacionStock()) {
        let producto = `{
             "id": ${}, 
             "nombre": "${}", 
             "precio": ${}, 
             "descripcion": 
             {"descripcion1": "${}", 
             "detallesTec": " "}, 
             "imagen": 
             {"img1": "./productos_ima/garrafones cuadrados 20 litros.jpeg", 
             "img2": "#", 
             "img3": "#" , 
             "img4": "#"}, 
             "stock": 1}`
    }
})

function validacionCampoID(params) {

}
function validacionCampoNombre(params) {

}
function validacionPrecio(params) {

}
function validacionDescripcion(params) {

}
function validacionDetallestecnicos(params) {

}
function validacionStock(params) {

}

