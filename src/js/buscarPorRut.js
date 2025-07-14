


document.getElementById('btn-buscar-rut').addEventListener('click', () => {

    const rut = document.getElementById('input-rut').value;
    fetch(`http://localhost:8080/api/v1/user/buscar/${rut}`)
        .then(response => response.json())
        .then(data=> {

            const tbody = document.querySelector('#tabla-usuarios tbody');
            tbody.innerHTML = '';

            const fila = document.createElement('tr');
            fila.innerHTML = `
            
                <td>001</td>
                <td>${data.nom_user}</td>
                <td>${data.ap_user}</td>
                <td>${data.rut_user}</td>
                <td>${data.emp_user}</td>
                <td>${data.entrada_user || '-'}</td>
                <td>${data.salida_user || '-'}</td>

            `;

            tbody.appendChild(fila);


        }).catch(Error => {
            console.log("Rut no encontrado: ", Error);
        });
});















