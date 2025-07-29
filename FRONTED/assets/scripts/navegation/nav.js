
const btn_guardar_mnu_desplegable = document.getElementById('btn-guardar-mnu-desplegable');
const btn_mostrar_todo_mnu_desplegable = document.getElementById('btn-mostrar-todo-mnu-desplegable');
const btn_buscar_por_rut_mnu_desplegable = document.getElementById('btn-buscar-por-rut-mnu-desplegable');
const btn_listar_por_empresa_mnu_desplegable = document.getElementById('btn-listar-por-empresa-mnu-desplegable');
const btn_registrar_salida_mnu_desplegable = document.getElementById('btn-registrar-salida-mnu-desplegable');

document.addEventListener('click', (e) => {

    if(btn_guardar_mnu_desplegable.contains(e.target)) {
        window.location.href = '../views/ingresarPersonas.html';
    }

    if(btn_mostrar_todo_mnu_desplegable.contains(e.target)) {
        window.location.href = '../views/mostrarPersonas.html';

    }

    if(btn_buscar_por_rut_mnu_desplegable.contains(e.target)) {
        window.location.href = '../views/buscarPorRut.html';

    }

    if(btn_listar_por_empresa_mnu_desplegable.contains(e.target)) {
        window.location.href = '../views/listarPorEmpresa.html';

    }

    if(btn_registrar_salida_mnu_desplegable.contains(e.target)) {
        window.location.href = '../views/registrarSalida.html';

    }

});

















