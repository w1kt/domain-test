import React, { PureComponent } from 'react';
import './FormField.css';
import FieldLabel from '../FieldLabel/FieldLabel';
import helpers from '../../../../helpers/helpers';

interface FormFieldProps extends CommomFieldProps {
  render: (id: string) => JSX.Element
}

export interface CommomFieldProps {
  label: string;
}

/**
 * This component allows grouping of some input field with a label.
 */
export class FormField extends PureComponent<FormFieldProps> {
  public render() {
    const id = helpers.createIDFromLabel(this.props.label);
    return (
      <div className="FormField">
        <FieldLabel id={id} text={this.props.label} />
        {this.props.render && this.props.render(id)}
      </div>
    );
  }
}

export default FormField;
