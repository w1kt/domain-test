import React from 'react';
import './Title.css'

interface Props {
  text: string;
}

/**
 * Title to represent the functionality of the feature. 
 * @param props 
 */
const Title: React.FC<Props> = props => {
  return <span className="Title primary-accent">{props.text}</span>;
};

export default React.memo(Title);
