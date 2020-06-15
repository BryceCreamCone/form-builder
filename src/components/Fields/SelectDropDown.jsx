import React from 'react';
import './fieldButtons.css';

const SelectDropDown = (key) => (
  <div className="select-drop-down" key={key}>
    <label htmlFor={`select${key}`}>Drop Down Select</label>
    <br />
    <select name={`select${key}`} id={key}>
      <option value="Value1">Value 1</option>
      <option value="Value2">Value 2</option>
    </select>
  </div>
)

export default SelectDropDown;

