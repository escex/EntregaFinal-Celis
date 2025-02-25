import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductById } from "../data";
import "./DetalleProducto.css"

function DetalleProducto() {
    const { productoId } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProductById(productoId)
            .then((data) => {
                setProducto(data);
                setLoading(false);
            });
    }, [productoId]);

    if (loading) return <h2 className="loading">Cargando detalles del producto...</h2>;
    if (!producto) return <h2 className="error">Producto no encontrado</h2>;

    return (
        <div className="detalleproducto">
            <img src={producto.image} alt={producto.name} />
            <h1>{producto.name}</h1>
            <h2>Categoría: {producto.category}</h2>
            {producto.material && <h3>Material: {producto.material}</h3>}
            <h4>$ {producto.price.toLocaleString()}</h4>
            <Link to="/productos">Volver</Link>
        </div>
    );
}

export default DetalleProducto;
