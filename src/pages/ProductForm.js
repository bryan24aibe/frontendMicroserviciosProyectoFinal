import { useState } from "react";
import "../styles/ProductForm.css"; // Importar los estilos

function ProductForm() {
  // Estado para manejar los valores del formulario
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const [message, setMessage] = useState(""); // Estado para mostrar mensajes de éxito o error

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("✅ Producto creado con éxito.");
        setFormData({ name: "", price: "", stock: "" }); // Limpiar formulario
      } else {
        setMessage("❌ Error al crear el producto.");
      }
    } catch (error) {
      setMessage("❌ Error de conexión con el servidor.");
    }
  };

  return (
    <div className="product-form">
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Precio:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />

        <button type="submit">Crear Producto</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default ProductForm;
