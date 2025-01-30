import { useParams } from "react-router-dom";
import { useContext } from "react";
import "../styles/ProductDetail.css";
import products from "../data/products";  // ✅ Ahora sí existe la carpeta `data/`
import { CartContext } from "../context/CartContext"; // 🔹 Importar el contexto

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext); // 🔹 Obtener función para agregar al carrito
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
      <button className="buy-btn" onClick={() => addToCart(product)}>Agregar al Carrito</button>
    </div>
  );
}

export default ProductDetail;
