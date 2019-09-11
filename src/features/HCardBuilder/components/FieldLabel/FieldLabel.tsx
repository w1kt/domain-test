import React from 'react';
import './FieldLabel.css';

interface Props {
  text: string;
}

/**
 * Label for form fields.
 * @param props 
 */
const FieldLabel: React.FC<Props> = props => {
  return <label className="FieldLabel primary-accent">{props.text}</label>;
};

export default React.memo(FieldLabel);
