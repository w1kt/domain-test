import React from 'react';
import './GroupTitle.css';

interface Props {
  text: string;
}

/**
 * This component is a title for FormGroup, it is styled with an underline. 
 * @param props 
 */
const GroupTitle: React.FC<Props> = props => {
  return <span className="GroupTitle">{props.text}</span>;
};

export default React.memo(GroupTitle);
