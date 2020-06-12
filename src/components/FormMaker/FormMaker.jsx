import React from 'react';
import FieldAdder from '../Fields/FieldAdder';
import FormPreview from '../FormPreview/FormPreview';
import FormPicker from '../FormPicker/FormPicker';
import './formMaker.css';

const FormMaker = () => (
  <div className="form-maker">
    <FieldAdder />
    <FormPreview />
    <FormPicker />
  </div>
);

export default FormMaker;