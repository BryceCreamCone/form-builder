import React from 'react';
import { connect } from 'react-redux';
import './fields.css';

import { addField } from '../../actions/actionCreators';

const Fields = ({ addField }) => (
  <div className="fields-selector">
    <h3>Form Options</h3>
    <button className="field" onClick={(e) => addField(e.target.textContent)}>Input</button>
    <button className="field" onClick={(e) => addField(e.target.textContent)}>TextArea</button>
  </div>
);

export default connect(null, { addField })(Fields);