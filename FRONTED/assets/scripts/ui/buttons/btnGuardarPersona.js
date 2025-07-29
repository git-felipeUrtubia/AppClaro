
import { savePersona } from "../../services/Save.js";

document.getElementById('btn-guardar').addEventListener('click', async () => {

    const persona = {
        nom_per: document.getElementById('input-nombre').value.trim().toLowerCase(),
        ap_per: document.getElementById('input-apellido').value.trim().toLowerCase(),
        rut_per: document.getElementById('input-rut').value.trim().toLowerCase(),
        emp_per: document.getElementById('input-empresa').value.trim().toLowerCase(),
        patente_per: document.getElementById('input-patente').value.trim().toUpperCase(),
        id_trabajo: document.getElementById('input-id-trabajo').value.trim(),
        entrada_per: document.getElementById('input-entrada').value.trim(),
        salida_per: null
    };

    const verificarCampos = ['nom_per', 'ap_per', 'rut_per', 'emp_per', 'entrada_per'];
    for (const campo of verificarCampos) {
        if (!persona[campo]) {
        alert(`Por favor, complete todos los campos obligatorios.`);
        return;
        }
    }

    try {
        await savePersona(persona);
        alert('¡Persona guardada correctamente!');
    } catch (error) {
        console.error('Error al guardar:', error);
        alert('Ocurrió un error al guardar la persona.');
    }
});















