import React from 'react'
import './input.css';

const Input = (key) => (
  <div className="input-container">
    <label htmlFor="input" key={key}>Label</label><br />
    <input name="input" type="text" placeholder="Text Input" />
  </div>
)

export default Input;
