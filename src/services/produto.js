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

export function calcularValorTotal(produtos) { 
    let total = 0;

    for (let i = 0; i < produtos.length; i++) {
        total += produtos[i].preco
    }
    
    return total
}

export function calcularPrecoMedio(produtos) {    
    const total = calcularValorTotal(produtos)

    return total / produtos.length
}


export async function criarProduto(formData) {
    console.log(formData)
    fetch(`${URL_API}/produtos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then((response) => response.json())
        .then(result => {
            console.log('Dado salvo. ', result)
        }).catch(err => {
            console.log('Erro ao salvar o dado.')
            console.log(err)
        })
}