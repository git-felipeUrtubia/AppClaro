
export async function registrarSalida(id, persona) {
    const response = await fetch(`http://localhost:8080/api/v1/persona/${id}`, {

        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(persona)

    });
    return response;
}






