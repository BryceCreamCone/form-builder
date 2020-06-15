import React from 'react';
import './fieldButtons.css';

const RadioInput = (key) => (
  <div className="radio-container" key={key}>
    <label>Radio Input</label>
    <br />
    <input type="radio" id={`option1-${key}`} name={key} value="Option 1" />
    <label htmlFor={`option1-${key}`}>Option 1</label>
    <input type="radio" id={`option2-${key}`} name={key} value="Option 2" />
    <label htmlFor={`option2-${key}`}>Option 2</label>
    <input type="radio" id={`option3-${key}`} name={key} value="Option 3" />
    <label htmlFor={`option3-${key}`}>Option 3</label>
    <input type="radio" id={`option4-${key}`} name={key} value="Option 4" />
    <label htmlFor={`option4-${key}`}>Option 4</label>
  </div>
)

export default RadioInput;