import { useContext } from "react";
import { Link } from "react-router-dom";
import carrito from "./imagenes/cart.svg";
import {CartContext} from "./context/CartContext"



const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);  

    return (cartTotal() > 0) ?
        <Link to={"/cart"} className="btn btn-primary position-relative">
            <img src="{carrito}" alt={"Carrito"} width={23} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartTotal()}</span>
        </Link> : "";
}

export default CartWidget;