import CardInfo from "../../components/HomeComponents/CardInfo/CardInfo"
import TableProducts from '../../components/HomeComponents/TableProducts/TableProducts'
function Home() {
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
                    <CardInfo titulo={'Lorem Ipsum'} valor={50} />
                </div>

                <div className="col">
                    <CardInfo titulo={'Lorem Ipsum 2'} valor={35} />
                </div>

                <div className="col">
                    <CardInfo titulo={'Lorem Ipsum 3'} valor={60} />
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12">
                    <TableProducts />
                </div>
            </div>
        </>
    )
}

export default Home