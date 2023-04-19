function addItem(item) {
    const itemHTML = `
    <div class = "cajitas">
    <div class="card h-100" style="width: 18rem;">
        <img src="${item.imagen['img1']}" class="card-img-top" alt="imagen">
        <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-text">${item.descripcion}</p>
            <a href="#" class="btn btn-primary">Agregar al carrito</a>
            <h5 class="card-title">${item.precio}</h5>
        </div>
    </div>
    </div>`;
    const productosDiv = document.getElementById("productosDiv");
    productosDiv.innerHTML += itemHTML;
}

let produc1 = { "id": 1, "nombre": "Garrafón de Agua - 20lts", "precio": 20.00, "descripcion": {"descripcion1": "#", "detallesTec": "#"}, "imagen": {"img1": "./imagenesProductos/enfriador.jpg", "img2": "#", "img3": "#" , "img4": "#"}, "stock": 1};
addItem(produc1);