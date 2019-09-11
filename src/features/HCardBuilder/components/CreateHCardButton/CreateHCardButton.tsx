import React, { PureComponent } from 'react';
import Button from '../Button/Button';

/**
 * This Button is used to submit the form for creating hCards.
 */
export class CreateHCardButton extends PureComponent {
  public render() {
    return (
      <Button
        name="Create hCard"
        bgColor="#3FA9E2"
        borderColor="#3193C6"
        type="submit"
      />
    );
  }
}

export default CreateHCardButton;
