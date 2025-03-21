import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="counter">
        <button onClick={handleDecrease} disabled={count === 1}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrease} disabled={count === stock}>+</button>
      </div>
      <button onClick={() => onAdd(count)} className="add-to-cart">Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
