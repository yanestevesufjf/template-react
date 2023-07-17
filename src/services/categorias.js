const URL_API = 'http://localhost:3000'

export async function getCategorias() {
    const res = await fetch(`${URL_API}/categorias`)
    const response = await res.json()
    return response
}