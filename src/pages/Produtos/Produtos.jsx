import { useState, useEffect } from 'react'
import TableProducts from '../../components/HomeComponents/TableProducts/TableProducts'
import { getProducts } from "../../services/produto"

function Produtos() {

    const [produtos, setProdutos] = useState([])
    const [produtosFiltrados, setProdutosFiltrados] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        async function getData() {
            const data = await getProducts()
            setProdutos(data)
            setProdutosFiltrados(data)
        }

        getData()
    }, [])

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const buscarProdutos = () => {
        console.log(`BUSCANDO PRODUTOS COM: ${searchTerm}`)
        const termo = searchTerm.toLocaleLowerCase().trim()
        const result = produtos.filter(item => item.nome.toLocaleLowerCase().includes(termo))
        setProdutosFiltrados(result)
    }

    return (
        <>
            <div className="row mt-3">
                <div className="col">
                    <h6 className="text-start">Produtos</h6>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-10'>
                    <input value={searchTerm} onChange={handleSearch} className='form-control w-100' type='text' placeholder='Buscar produtos'/>
                </div>
                <div className='col-2'>
                    <button className='btn btn-primary w-100' onClick={buscarProdutos}>Buscar</button>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12">
                    <TableProducts data={produtosFiltrados} />
                </div>
            </div>

        </>
    )
}

export default Produtos