import { Link } from "react-router-dom";
import "./Navbar.css"; 
import CartWidget from "./CartWidget";

function Navbar({ onCartClick}) {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/images/logotitle.jpg`} alt="Logo Title" className="logo-title" />
                </Link>
            </div>

            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category/bits">Bits de Perforación</Link></li>
                <li><Link to="/category/barras-integrales">Barras Integrales</Link></li>
                <li><Link to="/category/barras-conicas">Barras Cónicas</Link></li>
                <li><Link to="/category/aceites">Aceites Lubricantes</Link></li>
                <li><Link to="/category/neumaticos">Neumáticos</Link></li>
                <li><Link to="/category/acoples">Acoples Chicago</Link></li>
                <li><Link to="/category/repuestos">Repuestos Perforadora</Link></li>
            </ul>
            <CartWidget onClick={onCartClick}/>

        </nav>
    );
}

export default Navbar;

