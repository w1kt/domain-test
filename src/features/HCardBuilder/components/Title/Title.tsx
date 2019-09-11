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
  return <h1 className="Title primary-accent">{props.text}</h1>;
};

export default React.memo(Title);
