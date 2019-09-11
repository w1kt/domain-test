import React, { PureComponent } from 'react';
import Button from '../Button/Button';

/**
 * This Button allows users to upload an image and pushes it to the application
 * store.
 */
export class UploadAvatarButton extends PureComponent {
  public render() {
    return (
      <Button
        name="Upload Avatar"
        bgColor="#758E9D"
        borderColor="#506470"
        type="file"
      />
    );
  }
}

export default UploadAvatarButton;
