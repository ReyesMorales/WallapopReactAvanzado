import React from 'react';
import './styles.css';

function Advert(props) {
  return (
    <div key={props.id}>
      <div className="advert-card">
        <span className="advert-name">Nombre: {props.name}</span>
        <br></br>
        <span className="advert-sale">{props.sale ? 'Venta' : 'Compra'}</span>
        <br></br>
        <span className="advert-price">Precio: {props.price}</span>
        <br></br>
        <span className="advert-tags">Tags: {props.tags}</span>
      </div>
    </div>
  );
}

export default Advert;
