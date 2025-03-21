import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="item-list-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: ${item.price.toLocaleString()}</p>
                  <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: ${totalPrice.toLocaleString()}</h3>
          </div>
          <Link to="/checkout" className="checkout-link">
            <button className="checkout-button">Continuar Compra</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
