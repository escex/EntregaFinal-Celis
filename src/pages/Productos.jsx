import { useEffect, useState } from "react";
import { fetchProductos } from "../data"; 
import { Link } from "react-router-dom";
import "./Productos.css";

function Productos() {
    const [productos, setProductos] = useState([]);  
    const [loading, setLoading] = useState(true);  

    useEffect(() => {
        fetchProductos() 
            .then((data) => {
                setProductos(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <h2 className="loading">Cargando productos...</h2>;
    
    return (
        <div>
            <div className="galeria">
                {productos.map((producto) => (
                    <article key={producto.id}>
                        <h5>{producto.name}</h5>
                        <img src={`${process.env.PUBLIC_URL}/${producto.image}`} alt={producto.name} />
                        <Link to={`/productos/${producto.id}`}>Ver Detalle</Link>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Productos;
