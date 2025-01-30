import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Service from "./pages/Service";
import Payment from "./pages/Payment";
import Refunds from "./pages/Refunds";
import Promotions from "./pages/Promotions";
import NotFound from "./pages/NotFound";
import ProductForm from "./pages/ProductForm"; // ✅ Importar la nueva vista
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext"; // ✅ Importar el contexto

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/service" element={<Service />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/refunds" element={<Refunds />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/create-product" element={<ProductForm />} /> {/* ✅ Nueva ruta */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
