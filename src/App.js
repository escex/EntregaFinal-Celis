import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from "./pages/Home";
import DetalleProducto from "./pages/DetalleProducto";
import Category from "./pages/Category";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Productos from './pages/Productos';
import ItemListContainer from './components/ItemListContainer';
import Checkout from "./pages/Checkout";
import { CartProvider } from "./components/CartContext";

function App() {
  const [showItemList, setShowItemList] = useState(false);

  const handleCartClick = () => {
    setShowItemList(!showItemList);
  };

  return (
    <CartProvider> 
      <BrowserRouter>
        <Navbar onCartClick={handleCartClick} />
        {showItemList && <ItemListContainer />}
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/EntregaFinal-Celis" element={<Productos />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:productoId" element={<DetalleProducto />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="*" element={<Error />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
