import { useEffect, useState } from "react"
import CardInfo from "../../components/HomeComponents/CardInfo/CardInfo"
import TableProducts from '../../components/HomeComponents/TableProducts/TableProducts'
import { getProducts, calcularValorTotal, calcularPrecoMedio } from "../../services/produto"
import CardPaciente from "../../components/HomeComponents/CardPaciente/CardPaciente"
import './styles.css'

function Home() {

    const [pacientes, setPacientes] = useState([
        { id: 1, nome: 'Cesar Abascal', idade: 30, tel: '(55) 9 8224-4534', plano: 'Unimed' },
        { id: 2, nome: 'José', idade: 70, tel: '(55) 9 9121-9844', plano: 'Sem Plano' },
    ])
    const [pacientesFiltrados, setPacientesFiltrados] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

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

        setPacientesFiltrados(pacientes)
    }, [])

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const buscarPacientes = () => {
        const termo = searchTerm.toLocaleLowerCase().trim()
        const resultado = pacientes.filter(item => item.nome.toLocaleLowerCase().includes(termo))
        setPacientesFiltrados(resultado)
    }

    return (
        <>
            {/* <h1>Home</h1> */}
            {/* <div className="row mt-3">
                <div className="col">
                    <h6 className="text-start">Bem-vindo, Yan Esteves</h6>
                    <p className="text-start text-body-secondary">Você não tem nenhuma notificação.</p>
                </div>
            </div> */}

            <div className="row">
                <h4>Estatísticas do Sistema</h4>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <CardInfo titulo={'Pacientes'} valor={produtos.length} />
                </div>

                <div className="col">
                    <CardInfo titulo={'Consultas'} valor={valorTotal} />
                </div>

                <div className="col">
                    <CardInfo titulo={'Exames'} valor={precoMedio} />
                </div>
            </div>

            <div className="row">
                <h4>Informações rápidas dos pacientes</h4>
            </div>
            <div className='row mt-3'>
                <div className='col-10'>
                    <input value={searchTerm} onChange={handleSearch} className='form-control w-100' type='text' placeholder='Digite o nome do paciente'/>
                </div>
                <div className='col-2'>
                    <button className='btn btn-primary w-100' onClick={buscarPacientes}>Buscar</button>
                </div>
            </div>

            {/* Lista dos pacientes */}
            <div className="lista-pacientes">
                {pacientesFiltrados.map(paciente => {
                    return <CardPaciente key={paciente.id} nome={paciente.nome} idade={paciente.idade} telefone={paciente.tel} plano={paciente.plano}/>
                })}
            </div>



            {/* <div className="row mt-3">
                <div className="col-12">
                    <TableProducts data={produtos} />
                </div>
            </div> */}
        </>
    )
}

export default Home