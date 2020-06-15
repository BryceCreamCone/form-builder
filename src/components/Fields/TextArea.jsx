import React from 'react';
import './fieldButtons.css';

const TextArea = (key) => (
  <div className="text-area-container" key={key}>
    <label htmlFor={`text-area${key}`}>Label</label><br />
    <textarea name={`text-area${key}`} type="text" placeholder="Text Area" />
  </div>
)

export default TextArea;