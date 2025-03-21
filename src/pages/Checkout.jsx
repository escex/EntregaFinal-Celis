import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import { db } from "../config/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); 

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePlaceOrder = async () => {
    if (cart.length === 0) {
      alert("El Carrito esta vacio.");
      return;
    }

    if (!email.trim()) {
      alert("Porfavor ingrese su Email antes de realizar la compra.");
      return;
    }

    const order = {
      email, 
      items: cart.map(({ id, name, price, quantity }) => ({ id, name, price, quantity })),
      total: totalPrice,
      date: Timestamp.fromDate(new Date()),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      alert(`Pedido Realizado! Order ID: ${docRef.id}\nRevise su Email y siga las instrucciones para completar la compra.`);
      clearCart();
      navigate("/");
    } catch (error) {
      console.error("Error ingresando el pedido:", error);
      alert("Error. Intentelo denuevo.");
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <label htmlFor="email">Ingrese su Email para continuar con el Pedido:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <ul>
            {cart.map((item) => (
              <li key={item.id} className="checkout-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: ${item.price.toLocaleString()}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="checkout-total">
            <h3>Total: ${totalPrice.toLocaleString()}</h3>
            <button onClick={handlePlaceOrder} className="checkout-button">
              Hacer Pedido
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
