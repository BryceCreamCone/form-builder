import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import './formPreview.css';
import { deleteFields, saveForm, setActiveForm } from '../../actions/actionCreators';

class FormPreview extends React.Component {
  render() {
    const { fields, match, deleteFields, saveForm, setActiveForm } = this.props;
    return (
      <div className="form-preview-container">
        <h3>Form Preview</h3>
        <form>
          <div className="form-preview">
            {fields.map((value, key) => (
              <div className="form-field" key={key}>
                {parse(value)}
              </div>
            ))}
          </div>
        </form>
        <div className="form-preview-footer">
          <button className="save-form" disabled={!!match} onClick={() => saveForm(fields)}>Save Form</button>
          <button className="save-form" disabled={!!match} onClick={() => deleteFields()}>Clear Fields</button>
          <Link to="/create/form" onClick={() => setActiveForm(null)}>
            <button className="edit-form" disabled={!match}>Back To Form Maker</button>
          </Link>
          <Link to="/">
            <button className="return-home">Home Page</button>
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

export default connect(mapStateToProps, { deleteFields, saveForm, setActiveForm })(FormPreview);