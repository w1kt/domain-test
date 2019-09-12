import React from 'react';
import './Avatar.css';

interface Props {
  imageUrl?: string;
}

/**
 * Displays a square picture with a grey border.
 */
const Avatar: React.FC<Props> = ({ imageUrl }) => {
  if (!imageUrl) {
    imageUrl = './default-avatar.jpg';
  }
  return <img className="Avatar" src={imageUrl} alt="User Avatar" />;
};

export default React.memo(Avatar);
