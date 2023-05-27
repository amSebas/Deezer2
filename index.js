/* --> Logica para los botones y la aparicion del menu <--

const menu2 = document.getElementById('oferta-2')
const menu3 = document.getElementById('oferta-3')
const botonDespliegue = document.getElementById('boton-despliegue')
const botonDespliegue2 = document.getElementById('boton-despliegue-2')

function cargarPagina(){
    menu2.style.display = 'none'
    menu3.style.display = 'none'
}

function despliegueAnual(){
    menu2.style.display = 'flex'
    botonDespliegue.style.display = 'none'
}

function despliegueEstudiante(){
    menu3.style.display = 'flex'
    botonDespliegue2.style.display = 'none'
}

window.addEventListener("load", cargarPagina())                 

*/