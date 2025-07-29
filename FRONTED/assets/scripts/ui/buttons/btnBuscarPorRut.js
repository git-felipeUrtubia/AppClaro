
import { buscarPorRut } from "../../services/findByRut.js";

document.getElementById('btn-buscar-por-rut').addEventListener('click', async () => {

    const rut = document.getElementById('input-rut').value.trim().toLowerCase();

    try {

        const per = await buscarPorRut(rut);

        const tbody = document.querySelector('#table-personas tbody');
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>001</td>
            <td>${per.nom_per}</td>
            <td>${per.ap_per}</td>
            <td>${per.rut_per}</td>
            <td>${per.emp_per}</td>
            <td>${per.patente_per ? per.patente_per : '--'}</td>
            <td>${per.id_trabajo ? per.id_trabajo : '--'}</td>
            <td>${per.entrada_per}</td>
            <td>${per.salida_per ? per.salida_per : '--'}</td>
        `;
        tbody.appendChild(fila);

    }catch(err) {
        console.log(err);
    }

});





