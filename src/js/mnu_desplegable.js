



const btn_menu = document.getElementById('btn-menu');
const menu_desplegable = document.querySelector('.menu-desplegable'); 
const btn_cerrar_menu = document.getElementById('btn-cerrar-menu');


btn_menu.addEventListener('click', () => {

    const visible = menu_desplegable.style.transform = 'translateX(-100%)';

    if (visible === 'translateX(-100%)') {
        menu_desplegable.style.transform = 'translateX(0)';
        console.log(visible)
    }else {
        menu_desplegable.style.transform = 'translateX(-100%)';
    }

});

document.addEventListener('click', (e) => {
    if (!menu_desplegable.contains(e.target) && !btn_menu.contains(e.target)) {
        menu_desplegable.style.transform = 'translateX(-100%)';
    }else {
        menu_desplegable.style.transform = 'translateX(0)';
    }
});

document.addEventListener('click', (e) => {

    if (btn_cerrar_menu.contains(e.target)) {
        menu_desplegable.style.transform = 'translateX(-100%)';
    }

});

// ---------------------- NAVEGAR ----------------------



const btn_guardar_mnu_desplegable = document.getElementById('btn-guardar-mnu-desplegable');
const btn_buscar_por_nombre_mnu_desplegable = document.getElementById('btn-buscar-por-nombre-mnu-desplegable');
const btn_mostrar_todo_mnu_desplegable = document.getElementById('btn-mostrar-todo-mnu-desplegable');
const btn_buscar_por_rut_mnu_desplegable = document.getElementById('btn-buscar-por-rut-mnu-desplegable');

document.addEventListener('click', (e) => {

    if (btn_guardar_mnu_desplegable.contains(e.target)) {
        window.location.href = 'Guardar.html';
    }

    if (btn_buscar_por_nombre_mnu_desplegable.contains(e.target)) {
        window.location.href = 'buscarPorNombre.html';
    }

    if (btn_mostrar_todo_mnu_desplegable.contains(e.target)) {
        window.location.href = 'mostrarTodo.html';
    }

    if (btn_buscar_por_rut_mnu_desplegable.contains(e.target)) {
        window.location.href = 'buscarPorRut.html';
    }

});













