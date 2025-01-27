import React from 'react';
import ProductForm from './ProductForm'; // Asegúrate de que la ruta coincida con donde guardaste ProductForm

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Gestión de Productos</h1>
      <ProductForm />
    </div>
  );
}

export default App;
