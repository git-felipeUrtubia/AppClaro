
export function btnRegistrarSalida() {
    const boton = document.createElement('button');

    boton.className = 'btn-salida-table';
    boton.dataset.id = null;
    boton.innerHTML = '<img class="icono-salida-table" src="../assets/icons/remove-circle-outline.svg">';

    return boton;
}





