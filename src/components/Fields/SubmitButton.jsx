import React from 'react';
import { connect } from 'react-redux';
import './fieldButtons.css';

const SubmitButton = ({ fields }) => (
  <div className="submit-container">
    <button type="button">Submit Form</button>
  </div>
)

const mapStateToProps = (state) => ({
  fields: state.fields
});

export default connect(mapStateToProps, null)(SubmitButton);