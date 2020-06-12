import React from 'react';
import './textArea.css';

const TextArea = () => (
  <div className="text-area-container">
    <label htmlFor="text-area">Label</label><br />
    <textarea name="text-area" type="text" placeholder="Text Area" />
  </div>
)

export default TextArea;