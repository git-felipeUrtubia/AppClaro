

export async function savePersona(persona) {
    
    const response = await fetch('http://localhost:8080/api/v1/persona', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(persona)
    });

    if (!response.ok) {
        throw new Error('Error al guardar la persona');
    }
    return await response.json();
}


