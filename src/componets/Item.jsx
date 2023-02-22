import {link} from "react-router-dom";

const Item = ({Item}) => {
    return (
        <Link to={"/item/" + Item.index} className="text-decoration-none text-dark">
            <div className="card border-0">
                <img src={Item.imagen} className="card-img-top" alt={Item.nombre}/>
                <div className="card-body text-center">
                    <p className="card-title">{Item.nombre}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item;