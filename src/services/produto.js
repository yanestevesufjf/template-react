const URL_API = 'http://localhost:3000'

export async function getProducts() {
    const res = await fetch(`${URL_API}/produtos`)
    const response = await res.json()
    return response
}

export async function getProduct(id) {
    const res = await fetch(`${URL_API}/produtos/${id}`)
    const response = await res.json()
    return response
}

export async function calcularValorTotal() {    
    const produtos = []
}

export async function calcularPrecoMedio() {    
    const produtos = []
}