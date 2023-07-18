import './styles.css'

function CardPaciente({ nome, idade, telefone, plano }) {
    return (
        <div className="card-paciente">            
            <img src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png'/>
            <span className="nome_paciente">{nome}</span>
            <span className="idade_paciente">{idade} anos</span>
            <span className="tel_paciente">{telefone}</span>
            {plano === 'Sem Plano' ? 
                (<span className="plano_paciente sem_plano">{plano}</span>) : 
                (<span className="plano_paciente">{plano}</span>)
            }
            
            <span className="ver_mais">Ver Mais</span>
        </div>
    )   
}

export default CardPaciente