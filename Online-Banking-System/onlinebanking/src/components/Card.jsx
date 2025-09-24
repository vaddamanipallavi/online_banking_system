import React from 'react';
import './Card.css';

const Card = ({ title, children }) => (
  <div className="card">
    {title && <h3 className="card-title">{title}</h3>}
    {children}
  </div>
);

export default Card;
