import { useContext } from "react";
import "../styles/Cart.css";
import { CartContext } from "../context/CartContext"; // 🔹 Importar el contexto

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext); // 🔹 Obtener los productos del carrito

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Precio: {item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
