import React, { PureComponent } from 'react';
import Button from '../Button/Button';
import './CreateHCardButton.css';

/**
 * This Button is used to submit the form for creating hCards.
 */
export class CreateHCardButton extends PureComponent {
  public render() {
    return (
      <Button
        name="Create hCard"
        id="create-hcard"
        type="submit"
      />
    );
  }
}

export default CreateHCardButton;
