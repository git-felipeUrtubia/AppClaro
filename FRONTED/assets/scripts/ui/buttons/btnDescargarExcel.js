

const btn_descargar_excel = document.getElementById('btn-descargar-excel');

btn_descargar_excel.addEventListener('click', () => {

    fetch("http://localhost:8080/api/v1/persona/export/excel")
    .then(response => response.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;

        // Obtener fecha actual en formato DD-MM-YYYY
        const fecha = new Date();
        const dia = String(fecha.getDate()).padStart(2, '0');
        const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // los meses van de 0 a 11
        const anio = fecha.getFullYear();
        const nombreArchivo = `${dia}-${mes}-${anio}.xlsx`;

        a.download = nombreArchivo;
        a.click();
        window.URL.revokeObjectURL(url);
    });

});




