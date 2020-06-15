import React from 'react';
import './fieldButtons.css';

const SubmitButton = (key) => (
  <div className="submit-container" key={key}>
    <button type="submit">Submit Form</button>
  </div>
)

export default SubmitButton;