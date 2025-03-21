import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductById } from "../data";
import ItemCount from "../components/ItemCount";
import { useCart } from "../components/CartContext"; 
import "./DetalleProducto.css";

function DetalleProducto() {
    const { productoId } = useParams();
    const { addToCart } = useCart(); 
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProductById(productoId).then((data) => {
            setProducto(data);
            setLoading(false);
        });
    }, [productoId]);

    const handleAddToCart = (quantity) => {
        if (producto) {
            addToCart(producto, quantity);
        }
    };

    if (loading) return <h2 className="loading">Cargando detalles del producto...</h2>;
    if (!producto) return <h2 className="error">Producto no encontrado</h2>;

    return (
        <div className="detalleproducto">
            <img src={`${process.env.PUBLIC_URL}/public/${producto.image}`} alt={producto.name} />
            <h1>{producto.name}</h1>
            <h2>Categoría: {producto.category}</h2>
            {producto.material && <h3>Material: {producto.material}</h3>}
            <h4>$ {producto.price.toLocaleString()}</h4>

  
            <ItemCount stock={producto.stock || 10} initial={1} onAdd={handleAddToCart} />

            <Link to="/productos">Volver</Link>
        </div>
    );
}

export default DetalleProducto;

