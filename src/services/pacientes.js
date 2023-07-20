// localhost:3000/pacientes?cpf=...
const URL_API = 'http://localhost:3000'

// searchString = 106120
// searchString = Yan
export async function buscarPorNome2(searchString) {
    const res = await fetch(`${URL_API}/pacientes`)
    const pacientes = await res.json()
    return pacientes.filter(item => item.nome.includes(searchString) || item.cpf.includes(searchString))
}

export async function buscaPorNome(nome) {
    const res = await fetch(`${URL_API}/pacientes?nome=${nome}`)
    const response = await res.json()
    return response
}

