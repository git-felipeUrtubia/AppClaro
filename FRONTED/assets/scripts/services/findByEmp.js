

export async function buscarPorEmp(emp) {
    const response = await fetch(`http://localhost:8080/api/v1/persona/emp/${emp}`);

    if(!response.ok) {
        alert("Personas no encontradas.")
        throw new Error("Error al buscar persona.");
    }

    return await response.json();

}




