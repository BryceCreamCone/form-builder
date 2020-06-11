import React from 'react';
import Fields from '../Fields/Fields';
import FormPreview from '../FormPreview/FormPreview';
import './formMaker.css';

const FormMaker = () => (
  <div className="form-maker">
    <Fields />
    <FormPreview />
  </div>
);

export default FormMaker;