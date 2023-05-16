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
                    <a href="./login.html"><img src="./img/Vectorlogin.png" alt="login" id="login"  ali: 20px></a>
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

