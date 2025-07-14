
document.getElementById('btn-mostrar-todo').addEventListener('click', () => {

    fetch('http://localhost:8080/api/v1/user')
    .then(response => response.json())
    .then(data => {
        const tbody = document.querySelector('#tabla-usuarios tbody');
        tbody.innerHTML = ''; // limpia la tabla antes de insertar

        data.forEach((usuario, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${String(index + 1).padStart(3, '0')}</td>
            <td>${usuario.nom_user}</td>
            <td>${usuario.ap_user}</td>
            <td>${usuario.rut_user}</td>
            <td>${usuario.emp_user}</td>
            <td>${usuario.id_trabajo_user}</td>
            <td>${usuario.entrada_user}</td>
            <td>${usuario.salida_user}</td>
        `;
        tbody.appendChild(fila);
        });
    })
    .catch(error => {
        console.error('Error al cargar usuarios:', error);
    });

});






