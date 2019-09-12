import React, { PureComponent } from 'react';
import './Button.css';

export interface ButtonProps {
  name: string;
  id: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

/**
 * A styled HTML button / input with a visual press down response.
 */
class Button extends PureComponent<ButtonProps> {
  render() {
    const type = this.props.type || 'button';
    return (
      <button className={`Button ${this.props.id}`} type={type}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;
