import React, { PureComponent } from 'react';
import './Button.css';

export interface ButtonProps {
  name: string;
  bgColor?: string;
  borderColor?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

/**
 * A styled HTML button / input with a visual press down response.
 */
class Button extends PureComponent<ButtonProps> {
  render() {
    const style = {
      backgroundColor: this.props.bgColor,
      borderColor: this.props.borderColor
    };
    const type = this.props.type || 'button';
    return (
      <button className="Button" type={type} style={style}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;
