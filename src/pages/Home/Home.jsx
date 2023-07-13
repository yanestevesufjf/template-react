import { useEffect, useState } from "react"
import CardInfo from "../../components/HomeComponents/CardInfo/CardInfo"
import TableProducts from '../../components/HomeComponents/TableProducts/TableProducts'
import { getProducts, calcularValorTotal, calcularPrecoMedio } from "../../services/produto"

function Home() {

    const [produtos, setProdutos] = useState([])
    const [valorTotal, setValorTotal] = useState(0)
    const [precoMedio, setPrecoMedio] = useState(0)

    useEffect(() => {
        async function getData() {
            const data = await getProducts()

            const vt = calcularValorTotal(data)
            const pm = calcularPrecoMedio(data)

            setValorTotal(vt)
            setPrecoMedio(pm)
            setProdutos(data)
        }

        getData()
    }, [])

    return (
        <>
            {/* <h1>Home</h1> */}
            <div className="row mt-3">
                <div className="col">
                    <h6 className="text-start">Bem-vindo, Yan Esteves</h6>
                    <p className="text-start text-body-secondary">Você não tem nenhuma notificação.</p>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col">
                    <CardInfo titulo={'Produtos'} valor={produtos.length} />
                </div>

                <div className="col">
                    <CardInfo titulo={'Valor Total'} valor={valorTotal} />
                </div>

                <div className="col">
                    <CardInfo titulo={'Preço Médio'} valor={precoMedio} />
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12">
                    <TableProducts data={produtos} />
                </div>
            </div>
        </>
    )
}

export default Home