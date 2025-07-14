

document.getElementById('btn-buscar-nombre').addEventListener('click', () => {

    const nombre = document.getElementById('input-nombre').value;
    const apellido = document.getElementById('input-apellido').value;

    fetch(`http://localhost:8080/api/v1/user/buscar/${nombre}/${apellido}`)
        .then(response => response.json())
        .then(data => {

            const tbody = document.querySelector('#tabla-usuarios tbody');
            tbody.innerHTML = '';

            data.forEach((user, index) => {

                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${String(index + 1).padStart(3, '0')}</td>
                    <td>${user.nom_user}</td>
                    <td>${user.ap_user}</td>
                    <td>${user.rut_user}</td>
                    <td>${user.emp_user}</td>
                    <td>${user.entrada_user || '-'}</td>
                    <td>${user.salida_user || '-'}</td>
                `;
                tbody.appendChild(fila);

            });

        }).catch(Error => {
            console.log('Error al buscar usuarios: ', Error);
        });


})
















