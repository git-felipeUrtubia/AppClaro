

export async function buscarPorRut(rut) {
    const response = await fetch(`http://localhost:8080/api/v1/persona/${rut}`);
    
    if(!response.ok) {
        alert("Rut no encontrado");
        throw new Error("Error al buscar rut.");
    }

    return await response.json();
    
}





