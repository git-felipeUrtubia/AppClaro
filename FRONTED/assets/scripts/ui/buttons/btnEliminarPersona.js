
export function btnEliminarPersona() {
    const boton = document.createElement('button');

    boton.className = 'btn-eliminar-table';
    boton.dataset.id = null;
    boton.innerHTML = '<img class="icono-eliminar-table" src="../assets/icons/ban-outline.svg">';

    return boton;
}






