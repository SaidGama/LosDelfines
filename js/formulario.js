
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
        && validacionStock() == true && validacionImagen() == true) {
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


    }
});


function validacionCampoID() {
    let regex = /^[a-zA-Z0-9]{2}$/;
    if (Id.value == "") {
        alert("El campo de identificación no puede estar vacío.");
        Id.style.border = "solid thin red";
        return false;
    } else if (!regex.test(Id.value)) {
        alert("El campo de identificación debe ser de dos caracteres alfanuméricos.");
        Id.style.border = "solid thin red";
        return false;
    } else {
        Id.style.border = "solid thin green";
        return true;
    }
}

function validacionCampoNombre() {
    if (campNombre.value == "") {
        alert("El campo de nombre no puede estar vacío.");
        campNombre.style.border = "solid thin red";
        return false;
    } else if (campNombre.value < 2) {
        alert("El campo de nombre debe ser al menos 2 caracteres.");
        campNombre.style.border = "solid thin red";
        return false;
    } else if (campNombre.value > 50) {
        alert("El campo de nombre no debe ser mayor a 50 caracteres.");
        campNombre.style.border = "solid thin red";
        return false;
    } else {
        campNombre.style.border = "solid thin green";
        return true;
    }//if
}//validar Nombre

function validacionPrecio() {
    if (Precio.value == "") {
        alert("El campo de precio no puede estar vacío.");
        Precio.style.border = "solid thin red";
        return false;
    } else if (!/^([0-9])*$/.test(Precio.value)) {
        alert(`El valor "${Precio.value}" no es un número`);
        Precio.style.border = "solid thin red";
        return false;
    } else {
        Precio.style.border = "solid thin green";
        return true;
    }
}



function validacionDescripcion() {
    if (campDescripcion.value.length < 1) {
        campDescripcion.style.border = "solid thin red";
        alert("El campo de descripción no puede estar vacío.");
        return false;
    } else if (campDescripcion.value.length > 150) {
        campDescripcion.style.border = "solid thin red";
        alert("El campo de descripción no puede ser mayor de 150 caracteres.");
        return false;
    } else {
        campDescripcion.style.border = "solid thin green";
        return true;
    }//validar la descripción breve con uno y menos de 50 caracteres
}//validacionDescripción 

function validacionStock() {
    if (Stock.value == "") {
        alert("El campo de Stock no puede estar vacío.");
        Stock.style.border = "solid thin red";
        return false;
    } else if (!/^([0-9])*$/.test(Stock.value)) {
        alert(`El valor "${Stock.value}" no es un número`);
        Stock.style.border = "solid thin red";
        return false;
    } else {
        Stock.style.border = "solid thin green";
        return true;
    }
}

function validacionImagen (){
    if(inputImagen.value ==""){
        alert("El campo de Imagen no puede estar vacío.");
        inputImagen.style.border = "solid thin red";
        return false;
    } else {
        inputImagen.style.border = "solid thin green";
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




