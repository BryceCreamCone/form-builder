import React from 'react'
import './fieldButtons.css';

const Input = (key) => (
  <div className="input-container" key={key}>
    <label htmlFor={`input${key}`}>Label</label><br />
    <input name={`input${key}`} type="text" placeholder="Text Input" />
  </div>
)

export default Input;
