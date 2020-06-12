import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import './formPreview.css';
import { saveForm, setActiveForm } from '../../actions/actionCreators';

class FormPreview extends React.Component {
  renderFields(value, key) {
    const firstSpace = value.indexOf(' ');
    const newValue =
      value.slice(0, firstSpace) +
      ` key=${key} ` +
      value.slice(firstSpace);
    return parse(newValue);
  }
  render() {
    const { fields, match, saveForm, setActiveForm } = this.props;
    return (
      <div className="form-preview-container">
        <h3>Form Preview</h3>
        <div className="form-preview">
          {fields.map((value, key) => this.renderFields(value, key))}
        </div>
        <div className="form-preview-footer">
          <button className="save-form" disabled={!!match} onClick={() => saveForm(fields)}>Save Form</button>
          <Link to="/create/form" onClick={() => setActiveForm(null)}>
            <button className="edit-form" disabled={!match}>Back To Form Maker</button>
          </Link>
        </div>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  const { formState } = state
  if (formState.activeForm !== null) {
    return {
      fields: formState.forms[formState.activeForm],
    }
  } else {
    return {
      fields: state.fields,
    }
  }
}

export default connect(mapStateToProps, { saveForm, setActiveForm })(FormPreview);