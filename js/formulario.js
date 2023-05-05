
let campDescripcion = document.getElementById("campDescrip");
let campNombre = document.getElementById("campNombre");
let Id = document.getElementById("campoId");
let Precio = document.getElementById("CampoPrecios");
let Stock = document.getElementById("valiStock");
let btnCrear = document.getElementById("botonCrear");
let arrayProductos = [];
let inputImagen = document.getElementById('inputImagen');
let src = "";
let alertError = document.getElementById("alertError");
let alertErrorTexto = document.getElementById("alertErrorTexto");
let idTimeout;
const reader = new FileReader();


btnCrear.addEventListener("click", function (event) {
    event.preventDefault();
    clearTimeout(idTimeout);
    alertErrorTexto.innerHTML="";
    alertError.style.display="none";
    let Nombre= "Los siguientes campos deben ser llenados correctamente:<ul>";
    let validacionCampoIDFuction = validacionCampoID();
    let validacionCampoNombreFuction = validacionCampoNombre();
    let validacionCampoPrecioFuction=validacionPrecio();
    let validacionCampoDescripcionFuction= validacionDescripcion();
    let validacionCampoStockFuction = validacionStock();
    let validacionCampoImagenFuction = validacionImagen();
    Nombre += "</ul>";
    alertErrorTexto.insertAdjacentHTML("beforeend", Nombre);
    idTimeout=setTimeout (function(){
        alertError.style.display="none";
    }, 5000);
    if (validacionCampoIDFuction == true && validacionCampoNombreFuction == true && validacionCampoPrecioFuction == true && 
        validacionCampoDescripcionFuction == true
        && validacionCampoStockFuction == true && validacionCampoImagenFuction == true) {
        const file = inputImagen.files[0];
        reader.addEventListener("load", () => {
            // convert image file to base64 string
            src = reader.result;
            console.log(src);
            let producto = `{
                            "id": "${Id.value}", 
                            "nombre": "${campNombre.value}", 
                            "precio": "${Precio.value}", 
                            "descripcion": 
                            {"descripcion1": "${campDescripcion.value}", 
                            "detallesTec": "#"}, 
                            "imagen": 
                            {"img1": "${src}", 
                            "img2": "#", 
                            "img3": "#" , 
                            "img4": "#"}, 
                            "stock": "${Stock.value}"}`;
            arrayProductos.push(JSON.parse(producto));
            localStorage.setItem("arrayProductos", JSON.stringify(arrayProductos));
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }//ifCrear

    function validacionCampoID() {
        let regex = /^[a-zA-Z0-9]$/;
        if (Id.value == "" || regex.test(Id.value)) {
            Id.style.border = "solid thin red";
            Nombre += "<li>Escribe un ID válido.</li>";
            alertError.style.display="block";
        } else {
            Id.style.border = "solid thin green";
            return true;
        }//if
    }//validacionCampoID
    
    function validacionCampoNombre() {
        if (campNombre.value <= 2 || campNombre.value > 50) {
            campNombre.style.border = "solid thin red";
            Nombre += "<li>Escribe un nombre válido.</li>";
            alertError.style.display="block";
           
        } else {
            campNombre.style.border = "solid thin green";
            return true;
            
        }//if
    }//validar Nombre
    
    function validacionPrecio() {
        if ( Precio.value == "" || /^[a-zA-Z0-9]$/.test(Precio.value)) {
            Precio.style.border = "solid thin red";
            Nombre += "<li>Escribe un precio válido.</li>";
            alertError.style.display="block";
            return false;
        } else {
            Precio.style.border = "solid thin green";
            return true;
        }
    }//validacionPrecio
    
    
    function validacionDescripcion() {
        if (campDescripcion.value.length < 1 || campDescripcion.value.length > 150) {
            campDescripcion.style.border = "solid thin red";
            Nombre += "<li>Escribe una descripción válida.</li>";
            alertError.style.display="block";
            return false;
        } else {
            campDescripcion.style.border = "solid thin green";
            return true;
        }//validar la descripción breve con uno y menos de 50 caracteres
    }//validacionDescripción 
    
    function validacionStock() {
        if (Stock.value == "" || !/^([0-9])*$/.test(Stock.value)) {
            
            Stock.style.border = "solid thin red";
            Nombre += "<li>Escribe un stock válido.</li>";
            alertError.style.display="block";
            return false;
        } else {
            Stock.style.border = "solid thin green";
            return true;
        }
    }
    
    function validacionImagen (){
        if(inputImagen.value ==""){ 
            inputImagen.style.border = "solid thin red";
            Nombre += "<li>Ingresa una imagen válida.</li>";
            alertError.style.display="block";
            return false;
        } else {
            inputImagen.style.border = "solid thin green";
            return true;  
        }
    }

});//btnCrear


campNombre.addEventListener("blur", function (event) {
    event.preventDefault();
    campNombre.value = campNombre.value.trim();
}); //blur

campDescripcion.addEventListener("blur", function (event) {
    event.preventDefault();
    campDescripcion.value = campDescripcion.value.trim();
}); //blur

/*Id.addEventListener("blur", function(event){
    event.preventDefault();
    Id.value = Id.value.trim();
}); //blur*/


window.addEventListener("load", function (event) {
    if (localStorage.getItem("arrayProductos") != null) {
        arrayProductos = JSON.parse(localStorage.getItem("arrayProductos"));
    }
});




