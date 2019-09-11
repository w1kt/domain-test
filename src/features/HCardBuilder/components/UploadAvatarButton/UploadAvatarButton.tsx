import React, { PureComponent } from 'react';
import { HCardBuilderProps } from '../../containers/HCardBuilder';
import FileInputButton from '../FileInputButton/FileInputButton';

interface Props {
  setAvatar: HCardBuilderProps[ 'setAvatar' ];
}

/**
 * This Button allows users to upload an image and pushes it to the application
 * store.
 */
export class UploadAvatarButton extends PureComponent<Props> {
  public render() {
    return (
      <FileInputButton
        name="Upload Avatar"
        bgColor="#758E9D"
        borderColor="#506470"
        onFileUpload={this.props.setAvatar}
        accept="image/*"
      />
    );
  }
}

export default UploadAvatarButton;
