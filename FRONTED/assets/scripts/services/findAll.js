

export async function mostrarTodo() {
    const response = await fetch('http://localhost:8080/api/v1/persona');
    return response.json();
}






