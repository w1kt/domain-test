import React from 'react';
import './HCard.css';
import HeaderBar from './HeaderBar/HeaderBar';

const HCard: React.FC = () => {
  return (
    <div className="HCard">
      <HeaderBar title="Sam Fairfax" />
    </div>
  );
};

export default React.memo(HCard);
