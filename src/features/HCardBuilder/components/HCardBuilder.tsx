import React, { Component, PureComponent } from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { HCardBuilderProps } from '../containers/HCardBuilder';
import CreateHCardButton from './CreateHCardButton/CreateHCardButton';
import FormGroup from './FormGroup/FormGroup';
import './HCardBuilder.css';
import TextFormField from './TextFormField/TextFormField';
import Title from './Title/Title';
import UploadAvatarButton from './UploadAvatarButton/UploadAvatarButton';
import { UserDetails } from './UserDetails';

/**
 * This component shows a form that allows users to input their details in order
 * to build a hCard.
 */
class HCardBuilder extends PureComponent<
  InjectedFormProps<UserDetails, HCardBuilderProps> & HCardBuilderProps
> {
  public render() {
    return (
      <form className="HCardBuilder" onSubmit={this.props.handleSubmit}>
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
          <UploadAvatarButton setAvatar={this.props.setAvatar} />
          <CreateHCardButton />
        </div>
      </form>
    );
  }
}

const HCardBuilderForm = reduxForm<UserDetails, HCardBuilderProps>({
  form: 'hCardBuilder'
})(HCardBuilder);

export default HCardBuilderForm;
