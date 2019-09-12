import React from 'react';
import './HCard.css';
import HeaderBar from './HeaderBar/HeaderBar';
import CardItem from './CardItem/CardItem';

const HCard: React.FC = () => {
  return (
    <div className="HCard">
      <HeaderBar title="Sam Fairfax" />
      <div className="hcard-inner">
        <CardItem label="Email" value="sam.fairfax@fairfaxmedia.com.au" />
        <CardItem label="Phone" value="02 9282 2833" />
        <CardItem
          label="Address"
          value="1 Darling Island Road"
          extraLines={['Pyrmont, NSW']}
        />
        <CardItem label="Postcode" value="2009" inline />
        <CardItem label="Country" value="Australia" inline />
      </div>
    </div>
  );
};

export default React.memo(HCard);
