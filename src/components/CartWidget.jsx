import './CartWidget.css';
import React from 'react';
import icon from '../img/pixelcart.png';

//definir componente CartWidget 

const CartWidget = ({onClick}) => {
  return (
    <div className="cart" onClick={onClick}>
      <img src={icon} alt="cart icon" className="cart-icon" />
    </div>
  );
}

//exportar CartWidget para ser usado en Header.jsx
  export default CartWidget; 
  