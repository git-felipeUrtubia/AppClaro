
import { buscarPorEmp } from "../../services/findByEmp.js";

document.getElementById('btn-buscar-por-empresa').addEventListener('click', async () => {

    const emp = document.getElementById('input-empresa').value.trim().toLowerCase();

    try {

        const listPersonas = await buscarPorEmp(emp);
        const tbody = document.querySelector('#table-personas tbody');
        tbody.innerHTML = '';
        
        listPersonas.forEach((per, index) => {
            
            const fila = document.createElement('tr');

            fila.innerHTML = `
                <td>${String(index + 1).padStart(3, '0')}</td>
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
        });

    }catch (err) {
        console.log(err);
    }

});





