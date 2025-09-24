import React from 'react';
import './Input.css';

const Input = ({ label, type = 'text', value, onChange, placeholder, required = false }) => (
  <div className="input-group">
    {label && <label className="input-label">{label}</label>}
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  </div>
);

export default Input;
