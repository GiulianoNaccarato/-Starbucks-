import { useContext, useState } from "react";
import {CartContext} from "./context/CartContext";
import trash from "./imagenes/trash.svg";
import { Link } from "react-router-dom";
import {addDoc, collection, getFirestore} from "firebase/firestore"

const Cart = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const {cart, clear, removeItem, cartTotal, cartSum} = useContext(CartContext); 
    
    const generarOrden = () => {
        const buyer = {name:nombre, email:email, phone:telefono};
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds}`;
        const order = {buyer:buyer, item:cart, date:date, total:cartSum()};

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
        });
    }
    
    if (cartTotal() === 0) {
        return(
            <div className="container"> 
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-danger text-center" role="alert">
                        Carrito vacío</div>
                    </div>
                </div>
            </div>
        )
    }



        return (
            <div className="container my-5"> 
                <div className="row">
                    <h1 className="text-center">Productos Seleccionados</h1>
                    <div className="col-md-3">
                        <form>
                            <div class="mb-3">
                                <label htmlFor="nombre" class="form-label">Nombre</label>
                                <input type="texto" class="form-control" id="nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                             </div>
                             <div class="mb-3">
                                <label htmlFor="email" class="form-label">Email</label>
                                <input type="texto" class="form-control" id="email" onInput={(e) => {setEmail(e.target.value)}}/>
                             </div>       
                             <div class="mb-3">
                                <label htmlFor="telefono" class="form-label">Telefono</label>
                                <input type="texto" class="form-control" id="Telefono" onInput={(e) => {setTelefono(e.target.value)}}/>
                             </div>                   
                            <button type="button" class="btn btn-warning" onClick={generarOrden}>Generar orden</button>
                         </form>
                    </div>
                    <div className="col-md-10">
                          <table className="table">
                            <tr>
                                <td colSpan={5}><Link className="btn btn-warning bg-warning" onClick={() => {clear()}}>Vaciar Carrito</Link></td>
                            </tr>
                            {
                                cart.map(item => (
                                    <tr key={item.index}>
                                        <td className="text-start" width="20%"><img src={item.imagen} alt={item.nombre} width={140}/></td>
                                        <td className="text-start align-middle" width="20%">{item.nombre}</td>
                                        <td className="text-center align-middle" width="20%">{item.quantity} x ${item.precio}</td>
                                        <td className="text-center align-middle" width="20%">${item.quantity * item.precio}</td>
                                        <td className="text-end align-middle" width="10%"><button type="button" className="btn btn-warning bg-warning" onClick={() => {removeItem(item.index)}} title={"Eliminar Producto"}><img src={trash} alt={"Eliminar producto"} width={35} /></button></td>
                                    </tr>
                                    ))
                            }
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Total a pagar</td>
                                <td className="text-center"><b>{cartSum()}</b></td>
                                <td>&nbsp;</td>
                            </tr>
                          </table>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-12">
                            {orderId ? <div class="alert alert-warning text-center" role="alert"><h3>Gracias por su compra</h3><p>Se genero orden de compra con el ID: <b>{orderId}</b></p> </div>:""}
                    </div>
                </div>    
            </div>
    )
}

export default Cart; 