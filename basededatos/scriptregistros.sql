SELECT * FROM delfinesdb.categorias;
INSERT INTO delfinesdb.categorias(
nombre, 
descripcion
) VALUES ('purificador', 'purificadores de agua');
INSERT INTO delfinesdb.categorias(
nombre, 
descripcion
) VALUES ('filtros', 'filtro para garrafon');
INSERT INTO delfinesdb.categorias(
nombre, 
descripcion
) VALUES ('Dispensadores', 'Dispensadores de agua');
INSERT INTO delfinesdb.categorias(
nombre, 
descripcion
) VALUES ('garrafones', 'garrafon de agua');
INSERT INTO delfinesdb.categorias(
nombre, 
descripcion
) VALUES ('agua', 'botellas de agua');
SELECT * FROM delfinesdb.productos;
INSERT INTO delfinesdb.productos(
nombre,
precio, 
descripcion,
stock,
categorias_id
) VALUES ('Garrafon de agua', '25', 'Relleno de garrafón con 20 lts de agua purificada', '999', '4');
INSERT INTO delfinesdb.productos(
     nombre, 
     precio, 
     descripcion, 
     stock, 
     categorias_id
     )VALUES ('Dispensador de agua', '110', 'Dispensador para garrafon de agua', '150', '3');
INSERT INTO delfinesdb.productos(
nombre,
precio,
descripcion,
stock,
categorias_id
) VALUES('Dispensador de agua clásico', 169, 'Dispensador de agua clásico de ceramica', 200, 3);
INSERT INTO delfinesdb.productos(
nombre, 
precio, 
descripcion, 
stock, 
categorias_id
) VALUES ('Agua - 5lts', '27.5','Botellón de 5lts con agua purificada','300','5');
INSERT INTO delfinesdb.productos(
nombre,
precio,
descripcion,
stock,
categorias_id
) VALUES('Agua - Pack 6pzs 1lt', 39.99, 'Paquete con 6 botellas de 1lt', '200', '5');
INSERT INTO delfinesdb.productos(
nombre, 
precio, 
descripcion, 
stock, 
categorias_id
) VALUES ('Filtro de agua','109.95','Filtro de agua portátil','60','2');
SELECT * FROM delfinesdb.usuarios;
INSERT INTO delfinesdb.usuarios(
nombre, 
domicilio, 
correo,
contrasena, 
telefono
) VALUES ('Ariadna Islas','Quinto Andador de Tenayuca 119-B Arbolillo 1 Gustavo a Madero CDMX','jaz.islasg@gmail.com', 'gat0s123.',  5537843002);
INSERT INTO delfinesdb.usuarios(
    nombre,
    domicilio,
    correo,
    contrasena,
    telefono
) VALUES (
    'Said Gama','Calle Sur 1, Ecatepec, Mexico', 'sgamap8@gmail.com','Cosmooos0970','5587917054');
INSERT INTO delfinesdb.usuarios(
     nombre,
     domicilio,
     contrasena,
     correo,
	telefono
) VALUES ('Adriana Jiménez', 'calle granada Mz2  lt5 Edo.mex', 'Paraelagua', 'adriana.jmz.prz@gmail.com','5516577476');
INSERT INTO delfinesdb.usuarios (nombre, domicilio, correo, contrasena, telefono)
VALUES ('Miguel Montes de Oca','Bilbao, Iztapalapa, CDMX','mickey@hotmail.com','Parangaricutirimicuar0','5556575859');
INSERT INTO delfinesdb.usuarios(
nombre,
domicilio,
correo,
contrasena,
telefono
) VALUES('Jair Ibarra', 'Calle existente 123, jardines de alguien, Zapopan, Jalisco', 'jair.ibarra.p@gmail.com', 'Pa$$w0rd', 3316004609);
INSERT INTO delfinesdb.usuarios(
nombre,
domicilio,
correo,
contrasena,
telefono
) VALUES('Manuel Amaya', 'Calle 43 #603a x 88a y 90 Col. Inalambrica', 'manuel.amaya.acosta@hotmail.com', 'Estonoesmicontraseñ@1', 9999506963);
SELECT * FROM delfinesdb.administradores;
INSERT INTO delfinesdb.administradores(
nombre,  
correo,
contrasena
) VALUES ('Ariadna Islas','jaz.islasg@gmail.com', 'gat0s123.');
INSERT INTO delfinesdb.administradores(
    nombre,
    correo,
    contrasena
) VALUES (
    'Said Gama', 'sgamap8@gmail.com','Cosmooos0970');
INSERT INTO delfinesdb.administradores(
     nombre,
     contrasena,
     correo
) VALUES ('Adriana Jiménez', 'Paraelagua', 'adriana.jmz.prz@gmail.com');
INSERT INTO delfinesdb.administradores (nombre, correo, contrasena)
VALUES ('Miguel Montes de Oca','mickey@hotmail.com','Parangaricutirimicuar0');
INSERT INTO delfinesdb.administradores(
nombre,
correo,
contrasena
) VALUES('Jair Ibarra', 'jair.ibarra.p@gmail.com', 'Pa$$w0rd');
INSERT INTO delfinesdb.administradores(
nombre,
correo,
contrasena
) VALUES('Manuel Amaya', 'manuel.amaya.acosta@hotmail.com', 'Estonoesmicontraseñ@1');
SELECT * FROM delfinesdb.carrito;
INSERT INTO delfinesdb.carrito(
usuarios_id
) VALUES (1);
INSERT INTO delfinesdb.carrito(
usuarios_id
) VALUES (2);
INSERT INTO delfinesdb.carrito(
usuarios_id
) VALUES (3);
SELECT * FROM delfinesdb.detalle_carrito;
INSERT INTO delfinesdb.detalle_carrito(
productos_id,  
carrito_id,
cantidad
) VALUES ('1','2', '2');
INSERT INTO delfinesdb.detalle_carrito(
productos_id,  
carrito_id,
cantidad
) VALUES ('1','2', '2');
INSERT INTO delfinesdb.detalle_carrito(
productos_id,  
carrito_id,
cantidad
) VALUES ('3','1', '1');
INSERT INTO delfinesdb.detalle_carrito(
productos_id,  
carrito_id,
cantidad
) VALUES ('5','2', '1');