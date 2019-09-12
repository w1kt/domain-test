import React, { PureComponent } from 'react';
import { Field } from 'redux-form';
import FormField, { FormFieldProps } from '../FormField/FormField';
import './TextFormField.css';
import { createIDFromLabel } from '../../../../helpers';

interface Props extends FormFieldProps {}

/**
 * TextFormField is a special type of FormField that uses a text input.
 * It has no signature in the DOM and is purely a logical wrapper.
 */
export class TextFormField extends PureComponent<Props> {
  /**
   * Transform to lowercase and replace spaces with dashes.
   * @param label 
   */
  public render() {
    return (
      <FormField {...this.props}>
        <Field
          className="TextInput"
          name={createIDFromLabel(this.props.label)}
          component="input"
          type="text"
        />
      </FormField>
    );
  }
}

export default TextFormField;
