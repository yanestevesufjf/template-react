/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function TableProducts({ data }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Preço</th>
                    <th scope="col">Coleção</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => {
                    return <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.nome}</td>
                        <td>{item.preco}</td>
                        <td>{item.colecao}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default TableProducts