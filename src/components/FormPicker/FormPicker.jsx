import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setActiveForm } from '../../actions/actionCreators';

import './formPicker.css';

class FormPicker extends React.Component {
  render() {
    const { forms, setActiveForm } = this.props;
    if (forms.length) {
      return (
        <div className="saved-forms">
          <h4>Your Forms:</h4>
          {forms.map((value, index) => (
            <Link
              to={`/forms/${index}`}
              key={index}
              onClick={() => setActiveForm(index)}
              className="form-link"
            >
              Form {`${index + 1}`}
            </Link>
          ))}
        </div>
      )
    } else {
      return (
        <div className="no-forms">
          <h2>You don't have anything saved!</h2>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  forms: state.formState.forms,
})

export default connect(mapStateToProps, { setActiveForm })(FormPicker);