import './styles.css'
function CardInfo({ titulo, valor }) {
    return (
        <div className="card-info">
            <div className="card-body">                
                <div className="d-flex">
                    <img src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png'/>
                    <p className="valor-text">{valor}</p>
                </div>                

                <h5 className="card-title mt-3">{titulo}</h5>
                {/* <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a> */}
            </div>
        </div>
    )
}

export default CardInfo