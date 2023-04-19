let botonNavbar = document.getElementById("botonNavbar");
let containerDivlinks = document.getElementById("containerDivlinks");
let contador = 0;

    botonNavbar.addEventListener("click", function(event){
        event.preventDefault();
        contador++;
        esPresionado = true;
        if(contador%2 == 0){
            containerDivlinks.style.display = "none";
        }else{
            containerDivlinks.style.display = "block";
        }
 
    });

