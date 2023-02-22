import CartWidget from "./CartWidget";
import {link, nav} from "react-router-dom"
import logo from "./imagenes/pwa-icon-192.png";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <link className="navbar-brand" to={"/"}><img src={logo} alt="Starbacks" width={108}/></link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName={"active"} to={"/categoty/"}>Menu</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName={"active"} to={"/category/"}>Cafe</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName={"active"} to={"/categoty/"}>Experiencia Starbucks</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link disabled">Disabled</NavLink>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col d-flex align-items-center justify-content-end">
                        <CartWidget /> 
                    </div>
                </div>
            </div>
    )
}

export default NavBar; 