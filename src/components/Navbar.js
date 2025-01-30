import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>E-Commerce</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/products">Productos</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
        <li><Link to="/service">Servicio Técnico</Link></li>
        <li><Link to="/payment">Pago</Link></li>
        <li><Link to="/refunds">Devoluciones</Link></li>
        <li><Link to="/promotions">Promociones</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
