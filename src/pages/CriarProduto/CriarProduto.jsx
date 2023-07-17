import { useEffect, useState } from "react";
import { getCategorias } from "../../services/categorias"
import { criarProduto } from '../../services/produto'

function CriarProduto() {

    const [categorias, setCategorias] = useState([])
    const [form, setForm] = useState({
        nome: '',
        preco: '',
        categoria: ''
    })

    useEffect(() => {
        async function getData() {
            const data = await getCategorias()
            setCategorias(data)
        }

        getData()

        console.log('categorias')
        console.log(categorias)
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('FORM: ', form)

        /** */
        await criarProduto(form)
    }

    /**
     * Exemplo de listar produto + categoria
     
    
        const produtos = [
        {
            "nome": "Camiseta",
            "preco": "99,90",
            "categoria": "1",
            "id": 6
        }
        ]

        const categorias = [
        {
            "id": 1,
            "nome": "Vestuário"
        },
        {
            "id": 2,
            "nome": "Acessórios"
        }
        ]

        console.log(produtos[0])

        const produtoInicial = produtos[0]

        const categoriaProdutoInicial = categorias.find(item => item.id.toString() === produtoInicial.categoria)

        console.log(categoriaProdutoInicial)

        const data = {
        ...produtoInicial,
        categoria: categoriaProdutoInicial
        }

        console.log(data)
     */

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nome Produto</label>
                <input name="nome" type="text" value={form.nome} className="form-control" id="exampleInputEmail1" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Preço</label>
                <input name="preco" type="text" value={form.preco} className="form-control" id="exampleInputPassword1"  onChange={handleChange} />
            </div>

            <div className="mb-3">
                <label className="form-label">Categoria</label>
                <select name="categoria" className="form-select" value={form.categoria} onChange={handleChange} >
                    <option selected>Selecionar Categoria</option>
                    
                    {categorias.map(categoria => {
                        return <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                    })}


                    {/* <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option> */}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default CriarProduto;