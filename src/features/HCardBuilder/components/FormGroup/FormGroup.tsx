import React, { PureComponent } from 'react';
import './FormGroup.css';
import GroupTitle from '../GroupTitle/GroupTitle';

interface Props {
  groupTitle: string;
}

/**
 * This component provides structure and grouping of several
 * form fields with a title.
 */
export class FormGroup extends PureComponent<Props> {
  render() {
    return (
      <div className="FormGroup">
        <GroupTitle text={this.props.groupTitle} />
        <div className="flex-grid two-col vertical-margin">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default FormGroup;
