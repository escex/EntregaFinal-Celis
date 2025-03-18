import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ title, description }) => {
  return (
    <div className="item-list-container">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ItemListContainer;