import React from 'react';
import { connect } from 'react-redux';
import './fieldButtons.css';

const SelectDropDown = ({ fields }) => (
  <div className="select-drop-down">
    <label htmlFor={`select${fields.length || 0}`}>Drop Down Select</label>
    <br />
    <select name={`select${fields.length || 0}`} id={fields.length || 0}>
      <option value="Value1">Value 1</option>
      <option value="Value2">Value 2</option>
    </select>
  </div>
)

const mapStateToProps = (state) => ({
  fields: state.fields
});

export default connect(mapStateToProps, null)(SelectDropDown);

