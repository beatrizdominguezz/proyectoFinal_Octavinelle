// Cambia entre las pantallas (home / personajes)
function cambiarPantalla(idPantalla) {
    const pantallas = document.querySelectorAll('.pantalla');
    pantallas.forEach(p => p.classList.remove('activa'));

    document.getElementById(idPantalla).classList.add('activa');
}

// Abrir / cerrar acordeones de info general
function toggleDesplegable(btn, idContenido) {
    const contenido = document.getElementById(idContenido);
    btn.classList.toggle('activo');
    contenido.classList.toggle('abierto');
}

// Abrir modales
function mostrarModal(idModal) {
    document.getElementById(idModal).classList.add('activo');
}

// Cerrar modales
function ocultarModal(idModal) {
    document.getElementById(idModal).classList.remove('activo');
}