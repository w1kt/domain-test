import React from 'react';
import './Button.css';

interface Props {
  name: string;
  bgColor?: string;
  borderColor?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'] | 'file';
}

/**
 * A styled HTML button / input with a visual press down response.
 * If the component is used with type 'file' an input will be used, button
 * is used for all other allowed types.
 * @param props
 */
const Button: React.FC<Props> = ({
  name,
  bgColor = '#758E9D',
  borderColor = '#506470',
  type = 'button'
}) => {
  const style = {
    backgroundColor: bgColor,
    borderColor: borderColor
  };
  const element = () => {
    if (type === 'file') {
      return (
        <div className="Button" style={style}>
          <label htmlFor="files-input">
            {name}
          </label>
          <input id="files-input" type={type} />
        </div>
      );
    } else {
      return (
        <button className="Button" type={type} style={style}>
          {name}
        </button>
      );
    }
  };
  return element();
};

export default React.memo(Button);
