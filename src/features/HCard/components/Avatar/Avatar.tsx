import React from 'react';
import './Avatar.css';

interface Props {
  imageUrl?: string;
}

const Avatar: React.FC<Props> = ({ imageUrl = './default-avatar.jpg' }) => {
  return <img className="Avatar" src={imageUrl} alt="User Avatar" />;
};

export default React.memo(Avatar);
