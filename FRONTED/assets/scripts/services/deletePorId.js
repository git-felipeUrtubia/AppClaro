

export async function eliminarPorId(id) {

    return await fetch(`http://localhost:8080/api/v1/persona/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

 
 




