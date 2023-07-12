function CardInfo({ titulo, valor }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="fs-2">{valor}</p>
                {/* <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a> */}
            </div>
        </div>
    )
}

export default CardInfo