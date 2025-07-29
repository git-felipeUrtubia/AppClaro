import { mostrarTodo } from "../services/findAll.js";
import { registrarSalida } from "../services/checkOutput.js";
import { btnRegistrarSalida } from "./buttons/btnRegistrarSalida.js";

document.addEventListener('DOMContentLoaded', async () => {

    const listaPersonas = await mostrarTodo();
    const tbody = document.querySelector('#table-personas tbody');
    
    listaPersonas.forEach((data, index) => {
        
        const boton = btnRegistrarSalida();
        const fila = document.createElement('tr');
        const td = document.createElement('td');

        boton.dataset.id = data.id_per;

        boton.addEventListener('click', async () => {

            try {
                const time = new Date();
                const horaActual = time.toTimeString().split(' ')[0];
                data.salida_per = time.toTimeString().split(' ')[0];
                
                const id = boton.dataset.id;
                const persona = data;
                const response = await registrarSalida(id, persona);



                if(!response.ok) {
                    alert('Error al registrar salida.');
                    return [];
                }

                const row = boton.closest('tr');
                const tdSalida = row.querySelector('td[data-col="salida"]');
                tdSalida.textContent = horaActual;


            }catch(err) {
                return console.log(err);
            }

        });

        fila.innerHTML = `

            <td>${String(index + 1).padStart(3, '0')}</td>
            <td>${data.nom_per}</td>
            <td>${data.ap_per}</td>
            <td>${data.rut_per}</td>
            <td>${data.emp_per}</td>
            <td>${data.patente_per ? data.patente_per : '--'}</td>
            <td>${data.id_trabajo ? data.id_trabajo : '--'}</td>
            <td>${data.entrada_per}</td>
            <td data-col="salida">${data.salida_per ? data.salida_per : '--'}</td>

        `;
        td.append(boton);
        fila.append(td);
        tbody.append(fila);
    });

});






