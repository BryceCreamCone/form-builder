import React from 'react';
import { connect } from 'react-redux';
import './formPreview.css';

class FormPreview extends React.Component {
  render() {
    const { fields } = this.props;
    return (
      <div className="form-preview">
        <h3>Form Preview</h3>
        {fields.map((field, index) => (
          <input key={index} placeholder="text input" />
        ))}
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