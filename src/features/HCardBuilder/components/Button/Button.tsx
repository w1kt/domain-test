import React from 'react';
import './Button.css';

interface Props {
  name: string;
  bgColor?: string;
  borderColor?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

/**
 * A styled HTML button with a visual press down response.
 * @param props
 */
const Button: React.FC<Props> = props => {
  return (
    <button
      className="Button"
      type={props.type || 'button'}
      style={{ backgroundColor: props.bgColor, borderColor: props.borderColor }}
    >
      {props.name}
    </button>
  );
};

export default React.memo(Button);
