import React, { PureComponent } from 'react';
import { Field } from 'redux-form';
import FormField, { CommomFieldProps } from '../FormField/FormField';
import './TextFormField.css';

interface Props extends CommomFieldProps {}

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
      <FormField
        {...this.props}
        render={id => (
          <Field
            className="TextInput"
            name={id}
            component="input"
            type="text"
            id={id}
          />
        )}
      />
    );
  }
}

export default TextFormField;
