import React, { PureComponent } from 'react'
import './TextInput.css';

/**
 * A styled basic text input.
 */
export class TextInput extends PureComponent {
  render() {
    return (
      <input className="TextInput" type="text" value="Sam"/>
    )
  }
}

export default TextInput
