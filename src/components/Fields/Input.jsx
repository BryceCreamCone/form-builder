import React from 'react'
import { connect } from 'react-redux';
import './fieldButtons.css';

const Input = ({ fields }) => (
  <div className="input-container">
    <label htmlFor={`input${fields.length || 0}`}>Label</label><br />
    <input name={`input${fields.length || 0}`} type="text" placeholder="Text Input" />
  </div>
)

const mapStateToProps = (state) => ({
  fields: state.fields
});

export default connect(mapStateToProps, null)(Input);
