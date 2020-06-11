import React from 'react';
import { connect } from 'react-redux';
import './formPreview.css';
import { saveForm } from '../../actions/actionCreators';

class FormPreview extends React.Component {
  render() {
    const { fields } = this.props;
    return (
      <div className="form-preview-container">
        <h3>Form Preview</h3>
        <div className="form-preview">
          {fields.map((field, index) => (
            <input key={index} placeholder="text input" />
          ))}
        </div>
        <div className="form-preview-footer">
          <button className="save-form" onSubmit={() => saveForm()}>Save Form</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { formState } = state
  if (formState.activeForm) {
    return {
      fields: formState[formState.activeForm].fields,
    }
  } else {
    return {
      fields: state.fields,
    }
  }
}

export default connect(mapStateToProps, {})(FormPreview);