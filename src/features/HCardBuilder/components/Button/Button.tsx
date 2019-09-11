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
 * If the component is used with type 'file' an input will be used, button
 * is used for all other allowed types.
 * @param props
 */
class Button extends PureComponent<ButtonProps> {
  render() {
    const style = {
      backgroundColor: this.props.bgColor,
      borderColor: this.props.borderColor
    };
    return (
      <button className="Button" type={this.props.type} style={style}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;
