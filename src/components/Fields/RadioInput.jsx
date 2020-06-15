import React from 'react';
import { connect } from 'react-redux';
import './fieldButtons.css';

const RadioInput = ({ fields }) => (
  <div className="radio-container">
    <label>Radio Input</label>
    <br />
    <input type="radio" id={`option1-${fields.length || 0}`} name={fields.length || 0} value="Option 1" />
    <label htmlFor={`option1-${fields.length || 0}`}>Option 1</label>
    <input type="radio" id={`option2-${fields.length || 0}`} name={fields.length || 0} value="Option 2" />
    <label htmlFor={`option2-${fields.length || 0}`}>Option 2</label>
    <input type="radio" id={`option3-${fields.length || 0}`} name={fields.length || 0} value="Option 3" />
    <label htmlFor={`option3-${fields.length || 0}`}>Option 3</label>
    <input type="radio" id={`option4-${fields.length || 0}`} name={fields.length || 0} value="Option 4" />
    <label htmlFor={`option4-${fields.length || 0}`}>Option 4</label>
  </div>
)

const mapStateToProps = (state) => ({
  fields: state.fields
});

export default connect(mapStateToProps, null)(RadioInput);