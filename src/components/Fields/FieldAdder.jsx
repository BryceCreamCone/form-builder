import React from 'react';
import { connect } from 'react-redux';
import './fieldAdder.css';

import Input from './Input';
import TextArea from './TextArea';
import SelectDropDown from './SelectDropDown';
import RadioInput from './RadioInput';
import SubmitButton from './SubmitButton';


import { addField } from '../../actions/actionCreators';

class FieldAdder extends React.Component {
  handleClick = (e) => {
    const { addField } = this.props;
    addField(e.target.children[0].innerHTML);
  }

  render() {
    return (
      <div className="fields-selector">
        <h3>Form Fields</h3>
        <button className="field" onClick={this.handleClick}>
          Input
          <div className="hidden">
            <Input />
          </div>
        </button>
        <button className="field" onClick={this.handleClick}>
          TextArea
          <div className="hidden">
            <TextArea />
          </div>
        </button>
        <button className="field" onClick={this.handleClick}>
          Select (dropdown)
          <div className="hidden">
            <SelectDropDown />
          </div>
        </button>
        <button className="field" onClick={this.handleClick}>
          Radio Inputs
          <div className="hidden">
            <RadioInput />
          </div>
        </button>
        <button className="field" onClick={this.handleClick}>
          Submit Button
          <div className="hidden">
            <SubmitButton />
          </div>
        </button>
      </div>
    )
  }
}

export default connect(null, { addField })(FieldAdder);