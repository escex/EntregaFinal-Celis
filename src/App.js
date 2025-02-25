import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import DetalleProducto from "./pages/DetalleProducto";
import Category from "./pages/Category";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Productos from './pages/Productos';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
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
