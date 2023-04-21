let campDescripcion = document.getElementById("campDescrip");
let campNombre = document.getElementById("campNombre");
let Id = document.getElementById("campoId");
let Precio = document.getElementById("CampoPrecios");
let Stock = document.getElementById("valiStock");
let btnCrear = document.getElementById("botonCrear");
let arrayProductos = [];
let inputImagen = document.getElementById('inputImagen');
let src = "";
const reader = new FileReader();


btnCrear.addEventListener("click", function (event) {
    event.preventDefault();
    if (validacionCampoID() == true && validacionCampoNombre() == true && validacionPrecio() == true && validacionDescripcion() == true
        && validacionStock()) {
                const file = inputImagen.files[0];
                reader.addEventListener("load",() => {
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
                },false);
            
                if (file) {
                    reader.readAsDataURL(file);
                }


    }
});


function validacionCampoID() {
    if (Id.value == "") {
        alert("El campo de identificación no puede estar vacío.");
        Id.style.border = "solid thin red";
        return false;
    }
    let regex = /^[a-zA-Z0-9]{2}$/;
    if (!regex.test(Id.value)) {
        alert("El campo de identificación debe ser de dos caracteres alfanuméricos.");
        Id.style.border = "solid thin red";
        return false;
    }
    Id.style.border = "solid thin green";
    return true;
}

function validacionCampoNombre() {
    if (campNombre.length < 4 || campNombre.length > 50) {
        campNombre.style.border = "solid thin red";
    } else {
        campNombre.style.border = "solid thin green";
        return true;
    }//if
}//validar Nombre

function validacionPrecio() {
    if (Precio.value < 1) {
        Precio.style.border = "solid thin red";
        Precio += "<li>Escribe una cantidad valida</li>";
    } else {
        Precio.style.border = "solid thin green";
        return true;
    }
}

function validacionDescripcion() {
    if (campDescripcion.value.length < 1 || campDescripcion.value.length > 50) {
        campDescripcion.style.border = "solid thin red";
    } else {
        campDescripcion.style.border = "solid thin green";
        return true;
    }//validar la descripción breve con uno y menos de 50 caracteres
}//validacionDescripción 

function validacionStock() {
    if (Stock.value.length > 3) {
        Stock.style.border = "solid thin red";
        Stock += "<li>Escribe un numero válido.</li>";
    }
    if (!/^\d+$/.test(Stock.value)) {
        alert("El campo solo contiene números");
        return false;
    } else {
        Stock.style.border = "solid thin green";
        return true;
    }
}

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




