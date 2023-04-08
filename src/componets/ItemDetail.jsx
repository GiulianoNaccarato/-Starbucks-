import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import itemCount from "./itemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext (CartContext);

    const onAdd = (quantity) => {
        addItem (item, quantity);
    }


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
                        <itemCount stock={item.stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail