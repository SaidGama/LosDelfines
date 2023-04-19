let enlacesNav = document.getElementById("enlacesNav");
let botonesNav = document.getElementById("botonesNav");
let enlaces = `<a href="./productos.html" style="padding-left: 20px;" >Productos</a>
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



window.addEventListener("load", function (event) {
    event.preventDefault;
    enlacesNav.insertAdjacentHTML("beforeend", enlaces);
    botonesNav.insertAdjacentHTML("beforeend", botones);
    
}); 