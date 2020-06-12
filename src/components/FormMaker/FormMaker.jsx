import React from 'react';
import Fields from '../Fields/Fields';
import FormPreview from '../FormPreview/FormPreview';
import FormPicker from '../FormPicker/FormPicker';
import './formMaker.css';

const FormMaker = () => (
  <div className="form-maker">
    <Fields />
    <FormPreview />
    <FormPicker />
  </div>
);

export default FormMaker;