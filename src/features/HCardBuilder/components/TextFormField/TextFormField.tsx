import React, { PureComponent } from 'react';
import FormField, { FormFieldProps } from '../FormField/FormField';
import TextInput from '../TextInput/TextInput';

interface Props extends FormFieldProps {}

/**
 * TextFormField is a special type of FormField that uses a text input.
 * It has no signature in the DOM and is purely a logical wrapper.
 */
export class TextFormField extends PureComponent<Props> {
  render() {
    return (
      <FormField {...this.props}>
        <TextInput />
      </FormField>
    );
  }
}

export default TextFormField;
