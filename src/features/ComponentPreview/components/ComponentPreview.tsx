import React, { PureComponent } from 'react';
import './ComponentPreview.css';

interface Props {
  name: string;
}

/**
 * Provides a space to preview components passed as children.
 * The children are centered in a grey canvas-like area.
 */
export class ComponentPreview extends PureComponent<Props> {
  render() {
    return (
      <div className="ComponentPreview">
        <div className="preview-content">
          <h2 className="preview-name">{this.props.name}</h2>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ComponentPreview;
