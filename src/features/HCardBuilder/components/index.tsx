import React from 'react';
import Button from './Button/Button';
import FormGroup from './FormGroup/FormGroup';
import './index.css';
import TextFormField from './TextFormField/TextFormField';
import Title from './Title/Title';
import { reduxForm, InjectedFormProps } from 'redux-form';

/**
 * This component shows a form that allows users to input their details in order
 * to build a hCard.
 */
const HCardBuilder: React.FC<InjectedFormProps> = props => {
  const { handleSubmit } = props;
  return (
    <form className="HCardBuilder" onSubmit={handleSubmit}>
      <Title text="hCard Builder"></Title>
      <FormGroup groupTitle="Personal Details">
        <TextFormField label="Given Name" />
        <TextFormField label="Surname" />
        <TextFormField label="Email" />
        <TextFormField label="Phone" />
      </FormGroup>
      <FormGroup groupTitle="Address">
        <TextFormField label="House Name or #" />
        <TextFormField label="Street" />
        <TextFormField label="Suburb" />
        <TextFormField label="State" />
        <TextFormField label="Postcode" />
        <TextFormField label="Country" />
      </FormGroup>
      <div className="flex-grid two-col">
        <Button name="Upload Avatar" bgColor="#758E9D" borderColor="#506470" />
        <Button
          name="Create hCard"
          bgColor="#3FA9E2"
          borderColor="#3193C6"
          type="submit"
        />
      </div>
    </form>
  );
};

const HCardBuilderForm = reduxForm({
  form: 'hCardBuilder'
})(HCardBuilder);

export default HCardBuilderForm;
