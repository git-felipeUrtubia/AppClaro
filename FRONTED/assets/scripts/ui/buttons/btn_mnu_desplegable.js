

const btn_cerrar_menu = document.getElementById('btn-cerrar-menu');
const btn_mnu_desplegable = document.getElementById('btn-mnu-desplegable');
const menu_desplegable = document.querySelector('.menu-desplegable');

btn_mnu_desplegable.addEventListener('click', () => {

    const visible = menu_desplegable.style.transform = 'translateX(-100%)';

    if(visible === 'translateX(-100%)') {

        menu_desplegable.style.transform = 'translateX(0)';
    
    }else {
        menu_desplegable.style.transform = 'translateX(-100%)';
    }

});


document.addEventListener('click', (e) => {

    if(!menu_desplegable.contains(e.target) && !btn_mnu_desplegable.contains(e.target)) {
        menu_desplegable.style.transform = 'translateX(-100%)';
    }else {
        menu_desplegable.style.transform = 'translateX(0)';
    }

});

document.addEventListener('click', (e) => {

    if(btn_cerrar_menu.contains(e.target)) {
        menu_desplegable.style.transform = 'translateX(-100%)';
    }

});













