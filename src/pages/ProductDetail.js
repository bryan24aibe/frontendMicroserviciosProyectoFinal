import { useParams } from "react-router-dom";
import "../styles/ProductDetail.css";

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

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>{product.price}</h3>
      <button className="buy-btn">Agregar al Carrito</button>
    </div>
  );
}

export default ProductDetail;
