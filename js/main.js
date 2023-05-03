let enlacesNav = document.getElementById("enlacesNav");
let botonesNav = document.getElementById("botonesNav");
let footerC2 = document.getElementById("footerC2");
let footerC3 = document.getElementById("footerC3");
let footerC4 = document.getElementById("footerC4");
let footerC5 = document.getElementById("footerC5");

let enlaces = `<a href="./index.html" style="padding-left: 20px;" >Inicio</a>
                <a href="./productos.html" style="padding-left: 20px;" >Productos</a>
                <a href="./AcercadeNosotros.html" style="padding-left: 20px;">¿Quiénes Somos?</a>
                <a href="NuestrosServicios.html" style="padding-left: 20px;">Nuestros servicios</a>
                <a href="./contactanos.html" style="padding-left: 20px;">Contáctanos</a>`

let botones = `
            <ul class="lista">
                <li>
                    <a href="./login.html"><img src="./img/Vectorlogin.png" alt="login" id="login"></a>
                </li>
                <li>
                    <a href="./CarritoCompras.html"><img src="./img/Vectorcarrito.png" alt="carrito" id="carrito"></a>
                </li>
            </ul>`

let enlacesC2 = `<h5>Soporte</h5>
<ul class="nav flex-column">
    <li class="nav-item mb-2"><a href="./contactanos.html" class="nav-link p-0 text-white">Contáctanos</a></li>
    <li class="nav-item mb-2"><a href="https://wa.me/9999506963" target="_blank" class="nav-link p-0 text-white">+52 999 950 6963</a></li>
</ul>`;
let enlacesC3 = `<h5>Cuenta</h5>
<ul class="nav flex-column">
    <li class="nav-item mb-2"><a href="./micuenta.html" class="nav-link p-0 text-white">Mi cuenta</a></li>
    <li class="nav-item mb-2"><a href="./micuenta.html" class="nav-link p-0 text-white">Ingresar/Registro</a></li>
    <li class="nav-item mb-2"><a href="./CarritoCompras.html" class="nav-link p-0 text-white">Carrito</a></li>

</ul>`;
let enlacesC4 = ` <h5>Información</h5>
<ul class="nav flex-column">
    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Políticas de privacidad</a>
    </li>
    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Términos de uso</a></li>
    <li class="nav-item mb-2"><a href="./contactanos.html" class="nav-link p-0 text-white">Contacto</a></li>
</ul>`
let enlacesC5 = `<h5>Redes Sociales</h5>
<a href="https://www.facebook.com/edithaguadelfines?mibextid=ZbWKwL" target="_blank"><img src="./img/Facebook.png" alt="Icono" width="50px" height="50px" id="facebook" class="facebook"></a>
<a href="https://www.instagram.com/" target="_blank"><img src="./img/icon-instagram.png" alt="Icono" width="50px" height="50px" class="instagram"></a>
<a href="https://wa.me/9999493508" target="_blank"><img src="./img/whatsapp.png" alt="Icono" width="50px" height="50px" class="whatsapp"></a>`

window.addEventListener("load", function (event) {
    event.preventDefault;
    enlacesNav.insertAdjacentHTML("beforeend", enlaces);
    botonesNav.insertAdjacentHTML("beforeend", botones);
    footerC2.insertAdjacentHTML("beforeend", enlacesC2);
    footerC3.insertAdjacentHTML("beforeend", enlacesC3);
    footerC4.insertAdjacentHTML("beforeend", enlacesC4);
    footerC5.insertAdjacentHTML("beforeend", enlacesC5);

});

function myFunction() {
    //var topnav = document.querySelector(".topnav");
    let topnav = document.getElementById("topnav");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
      topnav.style.height = "0";
    } else {
      x.style.display = "block";
      topnav.style.height = "100%";
    }
}

/* arreglo de productos */
let produc1 = { "id": 1, "nombre": "Garrafón de Agua - 20lts", "precio": 25.00, "descripcion": {"descripcion1": "Relleno de garrafón con 20 lts de agua purificada", "detallesTec": "Rellenado de garrafón de 20 lts con agua purificada de alta calidad (Servicio en tienda o con entrega a domicilio)."}, "imagen": {"img1": "./productos_ima/garrafones cuadrados 20 litros.jpeg", "img2": "#", "img3": "#" , "img4": "#"}, "stock": 1};
let produc2 = { "id": 2, "nombre": "Dispensador de agua clásico", "precio": 169.00, "descripcion": {"descripcion1": "Dispensador de agua Clásico de cerámica", "detallesTec": "Dispensador para agua, clásico, hecho de cerámica de alta calidad."}, "imagen": {"img1": "./productos_ima/dispensador de agua blanco se queda.jpeg", "img2": "#", "img3": "#" , "img4": "#"}, "stock": 1};
let produc3 = { "id": 3, "nombre": "Dispensador de agua eléctrico", "precio": 149.99, "descripcion": {"descripcion1": "Dispensador eléctrico portátil de agua.", "detallesTec": "Dispensador de agua electrico portatil para garrafón, recargable mediante entrada USB, de fácil instalación"}, "imagen": {"img1": "./productos_ima/dispensador de agua para garrafon.jpg", "img2": "#", "img3": "#" , "img4": "#"}, "stock": 1};

let arrayProductos = [];


function addItem(item) {
    const itemHTML = `
    <div class = "cajitas container">
    <div class="card h-100">
        <img src="${item.imagen['img1']}" class="card-img-top" alt="imagen">
        <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
                <p class="card-text text-justify">${item.descripcion['descripcion1']}</p>
                <div style=" align-items: center; justify-content: space-around;">
                <h5 class="card-title" style = "padding-left: 15px; padding-top: 8px;">$${item.precio}</h5>
                </div>
        </div>
    </div>
    </div>`;
    const productosDiv = document.getElementById("productosDiv");
    productosDiv.innerHTML += itemHTML;
}

addItem(produc1);
addItem(produc2);
addItem(produc3);