import React from 'react';
import './Title.css';
import theme from '../../../../config/theme';

interface Props {
  text: string;
}

/**
 * Title to represent the functionality of the feature.
 * @param props
 */
const Title: React.FC<Props> = props => {
  return (
    <h1 className="Title" style={{ color: theme.accentColor }}>
      {props.text}
    </h1>
  );
};

export default React.memo(Title);
