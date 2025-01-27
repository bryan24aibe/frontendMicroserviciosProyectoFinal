import React, { useState } from 'react';

const ProductForm = () => {
  // Estado para manejar los datos del formulario
  const [product, setProduct] = useState({ name: '', price: '', stock: '' });
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  // Manejar el cambio de los inputs
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setResponseMessage(`Producto creado: ${data.message}, ID: ${data.id}`);
      setError(''); // Limpiar error si la solicitud es exitosa
      // Limpiar el formulario
      setProduct({ name: '', price: '', stock: '' });
    } catch (err) {
      console.error('Error al crear el producto:', err.message);
      setError('Error al crear el producto. Revisa los datos ingresados.');
      setResponseMessage(''); // Limpiar mensaje si hay un error
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h1>Crear Producto</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Precio:
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Stock:
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Crear Producto
        </button>
      </form>
      {/* Mensajes de respuesta */}
      {responseMessage && <p style={{ color: 'green', marginTop: '10px' }}>{responseMessage}</p>}
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
};

export default ProductForm;
