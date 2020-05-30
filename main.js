let ubicacioPrincipal = window.pageYOffset; //0 este seria su ubicacion actual que empieza en cero

AOS.init();

window.addEventListener('scroll', function() {
        let desplazamientoActual = window.pageYOffset; //100 y este seria por ejemplo el desplasamiento actual que podria ser
        //mas de cien o menos 

        if (ubicacioPrincipal >= desplazamientoActual) { // entonces se ejecutara lo siguiente: 0 > 100 cero es mayor a cien?
            // no entonce los que va hacer es bajar a else

            document.getElementsByTagName("nav")[0].style.top = "0px"
        } else {
            document.getElementsByTagName("nav")[0].style.top = "-100px"
        }
        ubicacioPrincipal = desplazamientoActual;
    })
    //ahora pasamos a menu
    //valga la rebundancia y estudiemos un poco los detalles de esta animacion de menu en la parte de amburguer
let enlacesHeader = document.querySelectorAll(".enlace-header")[0];
let semaforo = true;

document.querySelectorAll(".amburguer")[0].addEventListener('click', function() {
    //este metodo if anima a amburguer para que tenga cambio de color cuando hacemos click
    if (semaforo) {
        document.querySelectorAll(".amburguer")[0].style.color = "#fff";
        semaforo = false;
    } else {
        document.querySelectorAll(".amburguer")[0].style.color = "#000";
        semaforo = true;
    }

    enlacesHeader.classList.toggle("menudos");
})