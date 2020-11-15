console.log('DOM Cargado');


// Variables

// Funciones

// Codigo

const btnOpenMenu = document.querySelector('.btn-menu img');
const menu = document.querySelector('.header menu');
menu.style.transition = 'all .7s';
let contadorMenu = true;

btnOpenMenu.addEventListener('click', function(){
    

    if(contadorMenu){
        btnOpenMenu.src = 'images/icon-close.svg';            
        menu.style.display = 'flex';
        contadorMenu = false;
    }else{        
        btnOpenMenu.src = 'images/icon-hamburger.svg';
        menu.style.display = 'none';
        contadorMenu = true;        
    }
    
});


// Cambiar Imagen de Portada

const imagenPortada = document.querySelector('.portada-imagen');

console.log(imagenPortada)
console.log(imagenPortada.style.backgroundImage);

if(screen.width > 1020){
    imagenPortada.style.backgroundImage = "url(/images/bg-intro-desktop.svg)";

}else if(screen.width < 1020){
    imagenPortada.style.backgroundImage = "url(/images/bg-intro-mobile.svg)";
}
console.log(screen.width);

