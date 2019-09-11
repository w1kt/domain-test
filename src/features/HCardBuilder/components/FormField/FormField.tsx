import React, { PureComponent } from 'react'
import './FormField.css';
import FieldLabel from '../FieldLabel/FieldLabel';

export interface FormFieldProps {
  label: string
}

/**
 * This component allows grouping of some input field with a label.
 */
export class FormField extends PureComponent<FormFieldProps> {
  public render() {
    return (
      <div className="FormField">
        <FieldLabel text={this.props.label} /> 
        {this.props.children}
      </div>
    )
  }
}

export default FormField
