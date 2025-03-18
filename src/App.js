import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import Home from "./pages/Home";
import DetalleProducto from "./pages/DetalleProducto";
import Category from "./pages/Category";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Productos from './pages/Productos';
import ItemListContainer from './components/ItemListContainer';



function App() {
  
  const [showItemList, setShowItemList] = useState(false);

  const handleCartClick = () => {
    setShowItemList(!showItemList);
  };

  return (
    <div>
    <BrowserRouter>
    <Navbar onCartClick={handleCartClick}/>
    {showItemList && <ItemListContainer title="Item List" description="This is the item list container." />}
      <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:productoId" element={<DetalleProducto/>}/>
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
