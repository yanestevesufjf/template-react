import { useParams, useNavigate } from 'react-router-dom'
import './styles.css'
import { useEffect, useState } from 'react'
import { getProntuario } from '../../services/prontuario'

function Prontuario() {
    const { id } = useParams()
    const [prontuario, setProntuario] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        async function getData() {
                const response = await getProntuario(id)
                console.log('response: ', response)

            setProntuario(response)
        }

        if (id) {
            
            getData()

        }
    }, [])

    const editarConsulta = () => {
        navigate(`/consulta/${prontuario.consulta.id}`)
    }

    const editarExame = () => {
        navigate(`/exame/${prontuario.exame.id}`)
    }
    /*
    Paciente Saul Souza
    Convênio: Plamev
    Alergias: Urticárias causadas por insetos
    */
    return (
        <div>
            <div className="infos-prontuario text-start mb-4">
                <h4>Paciente {prontuario?.paciente?.nome}</h4>
                <h6>Convênio: {prontuario?.paciente?.plano}</h6>
                <h6>Alergias: Urticárias causadas por insetos</h6>
            </div>

            <div className="infos-consulta text-start mb-4">
                <h4>Consulta</h4>
                <div className="card-consulta">
                    <div className='row'>
                        <div className='col'>
                            <span className='fw-medium'>Motivo: lorem ipsum</span>
                            <span className='fw-light f-14 mb-3'>14:23 - 19/07/2023</span>
                        </div>
                        <div className='col'>
                            <button type="button" className="btn btn-outline-secondary btn-editar" onClick={editarConsulta}>Editar</button>
                        </div>
                    </div>

                    <span>Descrição: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam impedit hic quisquam iste, harum totam aut minima. </span>
                    <span>Medicação receitada: Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                    <span>Dosagem e Precauções: Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                </div>
            </div>

            <div className="infos-consulta text-start">
                <h4>Exame</h4>
                <div className="card-consulta">
                    <div className='row'>
                        <div className='col'>
                            <span className='fw-medium'>Nome: lorem ipsum</span>
                            <span className='fw-light f-14 mb-3'>16:23 - 19/07/2023</span>
                        </div>
                        <div className='col'>
                            <button type="button" className="btn btn-outline-secondary btn-editar" onClick={editarExame}>Editar</button>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <span><b>Tipo do Exame:</b> Lorem ipsum</span>
                        </div>
                        <div className='col'>
                            <span><b>Laboratório:</b> X</span>
                        </div>
                    </div>

                    <span><b>URL:</b> https://www.seila.com.br</span>
                    <span><b>Resultado:</b> </span>
                </div>
            </div>

        </div>
    )
}

export default Prontuario