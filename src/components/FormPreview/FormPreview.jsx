import React from 'react';
import { connect } from 'react-redux';
import parse from 'html-react-parser';
import './formPreview.css';
import { saveForm } from '../../actions/actionCreators';

class FormPreview extends React.Component {
  render() {
    console.log(this)
    const { fields, saveForm, match } = this.props;
    return (
      <div className="form-preview-container">
        <h3>Form Preview</h3>
        <div className="form-preview">
          {fields.map((value) => parse(value))}
        </div>
        <div className="form-preview-footer">
          <button className="save-form" disabled={!!match} onClick={() => saveForm(fields)}>Save Form</button>
        </div>
      </div >
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { formState } = state
  if (formState.activeForm) {
    return {
      fields: formState.forms[formState.activeForm],
      params: ownProps.filter,
    }
  } else {
    return {
      fields: state.fields,
    }
  }
}

export default connect(mapStateToProps, { saveForm })(FormPreview);