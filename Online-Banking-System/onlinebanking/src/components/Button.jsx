import React from 'react';
import './Button.css';

const Button = ({ children, onClick, type = 'button', disabled = false }) => (
  <button className="btn" type={type} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

export default Button;
