import { Link } from "react-router-dom";
import "../styles/Products.css";

// Datos quemados de productos con URLs de imágenes
const products = [
  { 
    id: 1, 
    name: "Display Samsung SM-A505G", 
    price: "$80", 
    description: "Pantalla original para Samsung Galaxy A50 (SM-A505G)", 
    image: "https://m.media-amazon.com/images/I/61j3D5GnLHL._AC_SL1500_.jpg"
  },
  { 
    id: 2, 
    name: "Display Samsung SM-A515F", 
    price: "$90", 
    description: "Pantalla original para Samsung Galaxy A51 (SM-A515F)", 
    image: "https://m.media-amazon.com/images/I/71WKSyqPU1L._AC_SL1500_.jpg"
  },
  { 
    id: 3, 
    name: "Display Samsung SM-A705F", 
    price: "$100", 
    description: "Pantalla original para Samsung Galaxy A70 (SM-A705F)", 
    image: "https://m.media-amazon.com/images/I/61sFxMpyPRL._AC_SL1500_.jpg"
  },
  { 
    id: 4, 
    name: "Display Samsung SM-M315F", 
    price: "$85", 
    description: "Pantalla original para Samsung Galaxy M31 (SM-M315F)", 
    image: "https://m.media-amazon.com/images/I/61PVIiQzqqL._AC_SL1500_.jpg"
  },
];

function Products() {
  return (
    <div className="products">
      <h2>Nuestros Productos</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link to={`/products/${product.id}`} className="details-btn">Ver Detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
