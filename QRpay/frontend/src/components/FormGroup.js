// src/components/FormGroup.js
import React from 'react';

function FormGroup({ label, type, placeholder, options }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      {type === 'select' ? (
        <select required>
          <option value="">Select {label}</option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} placeholder={placeholder} required />
      )}
    </div>
  );
}

export default FormGroup;
