import {useState} from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {

    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState

    const incrementarStock = () => {
        if (items < itemStock) {
            setItems (items + 1);
        }
    }

    const decrementarStock = () => {
        if (items > 1) {
            setItems (items + 1);
        }
    }

    const addToCart = () => {
        if (itemStock >= items) {
            setItemStock(itemStock - items);
            setItems(itemStock);
            console.log("agregaste: " + items + "Productos al carrito");
            setItemAdded (true);
            onAdd(items);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group">
                        <button className="btn btn-Success" onClick={decrementarStock}>-</button>
                        <button className="btn btn-Success">{items}</button>
                        <button className="btn btn-Success" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    {itemAdded ? <link to={"/cart"} className= "btn btn-warning">Terminar mi compra</link> :
                    <button className="btn btn-Success" onClick={addToCart}>Agregar al carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount; 