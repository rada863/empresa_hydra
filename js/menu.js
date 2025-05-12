// menu.js - Control del menú hamburguesa en móviles

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar elementos del DOM
    const burger = document.querySelector('.burger');
    const navBar = document.querySelector('.nav-bar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Función para alternar el menú
    function toggleMenu() {
        // Alternar clase 'active' en el menú de navegación
        navBar.classList.toggle('nav-active');
        
        // Animación del botón hamburguesa a 'X'
        burger.classList.toggle('toggle');
        
        // Deshabilitar scroll del body cuando el menú está abierto
        document.body.classList.toggle('no-scroll');
    }
    
    // Evento click en el icono hamburguesa
    burger.addEventListener('click', toggleMenu);
    
    // Eventos click en los enlaces del menú (para cerrar automáticamente al seleccionar)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navBar.classList.contains('nav-active')) {
                toggleMenu();
            }
        });
    });
    
    // Cerrar menú al hacer click fuera de él
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navBar.contains(event.target) || burger.contains(event.target);
        
        if (!isClickInsideNav && navBar.classList.contains('nav-active')) {
            toggleMenu();
        }
    });
    
    // Ajustar el menú al cambiar el tamaño de la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navBar.classList.contains('nav-active')) {
            toggleMenu();
        }
    });
});