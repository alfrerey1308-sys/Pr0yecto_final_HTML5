document.addEventListener('DOMContentLoaded', function() {
    const botones = document.querySelectorAll('.boton-menu');
    const secciones = document.querySelectorAll('.seccion');

    function mostrarSeccion(idSeccion) {
        // Ocultar todas las secciones
        secciones.forEach(sec => {
            sec.classList.remove('visible');
        });

        // Quitar estilo activo a todos los botones
        botones.forEach(btn => {
            btn.classList.remove('activo');
        });

        // Mostrar la sección seleccionada
        document.getElementById(idSeccion).classList.add('visible');
        event.target.classList.add('activo');
    }

    // Asignar evento clic a cada botón
    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            mostrarSeccion(this.dataset.seccion);
        });
    });

    // Mostrar la sección de Inicio automáticamente al cargar
    document.querySelector('.boton-menu[data-seccion="inicio"]').click();
});
