import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductos } from "../data";
import "./Productos.css"

function Category() {
    const { categoryId } = useParams();  
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProductos(categoryId).then((data) => {
            setProductos(data);
            setLoading(false);
        });
    }, [categoryId]);

    if (loading) return <h2 className="loading">Cargando productos...</h2>;
    if (productos.length === 0) return <h2 className="error">No hay productos en esta categoría.</h2>;

    return (
        <div className="category-page">
            <h1>{categoryId.replace("-", " ")}</h1>
            <div className="galeria">
                {productos.map((producto) => (
                    <article key={producto.id}>
                        <h5>{producto.name}</h5>
                        <img src={producto.image} alt={producto.name} />
                        <Link to={`/productos/${producto.id}`}>Ver Detalle</Link>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Category;