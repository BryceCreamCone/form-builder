import React from 'react';
import { connect } from 'react-redux';
import './fieldButtons.css';

const TextArea = ({ fields }) => (
  <div className="text-area-container">
    <label htmlFor={`text-area${fields.length || 0}`}>Label</label><br />
    <textarea name={`text-area${fields.length || 0}`} type="text" placeholder="Text Area" />
  </div>
)

const mapStateToProps = (state) => ({
  fields: state.fields
});

export default connect(mapStateToProps, null)(TextArea);