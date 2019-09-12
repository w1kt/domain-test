import React, { PureComponent } from 'react';
import { ButtonProps } from '../Button/Button';
import '../Button/Button.css';

interface Props extends ButtonProps {
  onFileUpload: Function;
  accept: React.InputHTMLAttributes<HTMLInputElement>['accept'];
}

/**
 * This component provies uploading of files into the browser.
 * Use the accept prop to specify the allowed types.
 * Use the onFileUpload prop to specify a function to run on upload.
 */
export class FileInputButton extends PureComponent<Props> {
  public handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }
    this.props.onFileUpload(URL.createObjectURL(file));
  }
  public render() {
    const style = {
      backgroundColor: this.props.bgColor,
      borderColor: this.props.borderColor
    };
    return (
      <div className="Button" style={style}>
        <label htmlFor="files-input">{this.props.name}</label>
        <input
          id="files-input"
          type="file"
          accept={this.props.accept}
          onChange={event => this.handleOnChange(event)}
        />
      </div>
    );
  }
}

export default FileInputButton;
