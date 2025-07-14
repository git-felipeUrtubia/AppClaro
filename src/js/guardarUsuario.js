

document.getElementById('btn-guardar-form').addEventListener('click', () => {

    const usuario = {

        nom_user: document.getElementById('input-nombre').value,
        ap_user: document.getElementById('input-apellido').value,
        rut_user: document.getElementById('input-rut').value,
        emp_user: document.getElementById('input-empresa').value,
        id_trabajo_user: parseInt(document.getElementById('input-ID').value),
        entrada_user: document.getElementById('input-entrada').value || null,
        salida_user: document.getElementById('input-salida').value || null

    }

    // Llamar a la API con fetch
    fetch('http://localhost:8080/api/v1/user', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(data => {
        console.log('Usuario guardado:', data);
        alert('Usuario guardado correctamente');
    })
    .catch(err => {
        console.error('Error al guardar:', err);
        alert('Ocurrió un error');
    });


});







