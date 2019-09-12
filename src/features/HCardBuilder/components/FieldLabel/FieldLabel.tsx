import React from 'react';
import './FieldLabel.css';
import theme from '../../../../config/theme';

interface Props {
  id: string;
  text: string;
}

/**
 * Label for form fields.
 * @param props
 */
const FieldLabel: React.FC<Props> = props => {
  return (
    <label
      className="FieldLabel"
      htmlFor={props.id}
      style={{ color: theme.accentColor }}
    >
      {props.text}
    </label>
  );
};

export default React.memo(FieldLabel);
