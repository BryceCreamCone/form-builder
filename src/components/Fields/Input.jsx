import React from 'react'
import './input.css';

const Input = () => (
  <div className="input-container">
    <label htmlFor="input">Label</label><br />
    <input name="input" type="text" placeholder="Text Input" />
  </div>
)

export default Input;
