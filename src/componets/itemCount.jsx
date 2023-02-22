import {useState} from "react";

const ItemCount = ({stock}) => {

    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

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

    const onAdd = () => {
        if (itemStock >= items) {
            setItemStock(itemStock - items);
            setItems(itemStock);
            console.log("agregaste: " + items + "Productos al carrito")
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
                    <button className="btn btn-Success" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount; 