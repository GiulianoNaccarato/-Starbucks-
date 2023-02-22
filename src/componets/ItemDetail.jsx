import itemCount from "./itemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-end">
                    <img src={item.imagen} alt={item.nombre} />
                </div>
                <div className="col">
                    <div>
                        <h1>{item.nombre}</h1>
                        <h5>{item.calorias}</h5>
                        <p>{item.descripcion}</p>
                        <p><b>${item.precio}</b></p>
                        <itemCount stock={item.stock} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail